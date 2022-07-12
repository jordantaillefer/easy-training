export abstract class Factory<T, U> {
  abstract generate(overrides?: Partial<T>): U
  private generateMany(count: number, overrides?: Partial<T>[] | Partial<T>): U[] | undefined {
    let result: U[] = []
    if (Array.isArray(overrides)) {
      result = overrides.map((override) => this.generate(override))
    } else {
      for (let i = 0; i < count; i++) {
        result.push(this.generate(overrides))
      }
    }

    return result
  }

  generateSiPresent<M, N>(
    overrides: Partial<M> | true | undefined,
    factory: Factory<M, N>
  ): N | undefined {
    return overrides === true
      ? factory.generate()
      : overrides
      ? factory.generate(overrides)
      : undefined
  }

  generateManySiPresent<M, N>(
    count: number,
    overrides: Partial<M>[] | Partial<M> | true | undefined,
    factory: Factory<M, N>
  ): N[] | undefined {
    return overrides === true
      ? factory.generateMany(count)
      : overrides
      ? factory.generateMany(count, overrides)
      : undefined
  }
}
