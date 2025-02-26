import { DioAccount } from "./DioAccount";

export class CompanyAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  getLoan = (amount: number): void => {
    if (this.validateStatus()) {
      this.deposit(amount);
      console.log('Você pegou um empréstimo');
    } else {
      console.log('Conta inválida para empréstimo.');
    }
  }
}

