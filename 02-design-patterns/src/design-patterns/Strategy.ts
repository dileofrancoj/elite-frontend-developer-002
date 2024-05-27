interface DiscountStrategy {
    applyDiscount(amount: number): number
}
// 100 -> NoDiscount --> 100
class NoDiscount implements DiscountStrategy {
    applyDiscount(amount: number): number {
        return amount
    }
}

class PercentageDiscount implements DiscountStrategy {
    private percentage: number
    constructor(percentage: number) {
        this.percentage = percentage
    }
    // applyDiscount(100)
    applyDiscount(amount: number): number {
        const discount = (amount * this.percentage) / 100
        return amount - discount
    }
}

class FixedDiscount implements DiscountStrategy {
    private discountAmount: number

    constructor(discountAmount: number) {
        this.discountAmount = discountAmount
    }

    applyDiscount(amount: number): number {
        return amount - this.discountAmount
    }
}

// PaymentProcessor / Context
// setDiscountStrategy
// processPayment

class PaymentProcessor {
    private discountStrategy : DiscountStrategy = new NoDiscount()

    public setDiscountStrategy(strategy: DiscountStrategy): void {
        this.discountStrategy = strategy
    }

    processPayment(amount: number): number {
        return this.discountStrategy.applyDiscount(amount)
    }
}

const processor = new PaymentProcessor() // default no hay descuento
console.log('Procesor default: ', processor.processPayment(100)) // 100
processor.setDiscountStrategy(new PercentageDiscount(50))
console.log(processor.processPayment(100)) // $50
processor.setDiscountStrategy(new FixedDiscount(20))
console.log(processor.processPayment(1000)) // 980
