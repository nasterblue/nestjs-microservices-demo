export class PaymentModel {
  [key: string]: any;

  constructor(data: Partial<PaymentModel>) {
    Object.assign(this, data);
  }
}

export const nasterbluePayment = new PaymentModel({
  "@context": "http://schema.org",
  "@type": "MortgageLoan",
  "name": "Agency 30 Year Fixed",
  "description": "Experience easier budgeting with predictable monthly payments. Relax knowing you’ll never have to worry about rising interest rates for the life of your loan.",
  "amount": {
    "@type": "MonetaryAmount",
    "amount": "200000",
    "currency": "USD"
  },
  "loanTerm": {
    "@type": "QuantitativeValue",
    "value": "30",
    "unitCode": "ANN"
  },
  "interestRate": "3.625",
  "annualPercentageRate": "3.8047",
  "loanRepaymentForm": {
    "@type": "RepaymentSpecification",
    "loanPaymentAmount": {
      "@type": "MonetaryAmount",
      "amount": "909.3",
      "currency": "USD"
    },
    "downPayment": "20",
    "numberOfLoanPayments": "360",
    "loanPaymentFrequency": "Monthly"
  }
});