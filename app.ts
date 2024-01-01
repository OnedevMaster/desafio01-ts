import { CompanyAccount } from './class/CompanyAccount';
import { PeopleAccount } from './class/PeopleAccount';
import { NewAccount } from './class/NewAccount';

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10);
console.log(peopleAccount);
peopleAccount.deposit(50);
peopleAccount.withdraw(20);
console.log('Balance:', peopleAccount.getBalance());

const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20);
console.log(companyAccount);
companyAccount.deposit(100);
companyAccount.getLoan(50);
console.log('Balance:', companyAccount.getBalance());

const newAccount: NewAccount = new NewAccount('New', 30);
console.log(newAccount);
newAccount.deposit(100);
console.log('Balance:', newAccount.getBalance());
