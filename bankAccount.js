
const owner1 = {
    name: "james dean",
    id: 123456789,
    phone: "050-3226598",
    address: "somewhere over the rainbow 1, oz city",
    email: "a@b.com",
    type: "business",
    accountIds: [],
}
const owner2 = {
    name: "miky mouse",
    id: 1231123123,
    phone: "050-111222337",
    address: "disny row 5, the city",
    email: "miky@m.com",
    type: "private",
    accountIds: [],
}
// owners must have theire own functions ......

function Owners(owner) {
    this.ownerArr = [];
    this.ownerArr.push(owner);
}

//-----------------------------------------------------

function Account(accountId, balance, owners) {
    this.accountId = accountId;
    this.balance = balance;
    this.owners = owners.ownerArr.slice(); // object...
}

Account.prototype.getBalance = function () {
    return this.balance;
}

Account.prototype.deposit = function (depositAmount) {

    if (depositAmount < 0) { return false; }
    this.balance += depositAmount;
    return true;
}

Account.prototype.withdraw = function (withdrawAmount) {

    if (this.balance - withdrawAmount < 0) { return false; }
    this.balance -= withdrawAmount;
    return true;
}

Account.prototype.transfer = function (toAccount, trasferAmount) {
    if (trasferAmount < 0) { return false; }
    if (typeof toAccount !== 'object') { return false; }
    if (!toAccount instanceof Account) { return false; }
    if (this.balance - trasferAmount < 0) { return false; }

    const res1 = this.withdraw(trasferAmount);
    const res2 = toAccount.deposit(trasferAmount);

}

Account.prototype.addOwner = function (owner) {
    this.owners.push(owner);
}

Account.prototype.removeOwner = function (ownerId) {
    const i = this.owners.indexOf(ownerId);
    this.owners = this.owners.splice(i, 1);
}


const owners = new Owners(owner1);
const acc = new Account(333, 100, owners);
acc.addOwner(owner2);
acc.removeOwner(123456789);
acc.deposit(5000);
acc.withdraw(9000);
acc.deposit(5000);
acc.withdraw(9000);
console.log(acc.getBalance());

const owners2 = new Owners(owner1);
const acc2 = new Account(444, 1000, owners2);
acc.transfer(acc2, 1000);
console.log(acc.getBalance());
console.log(acc2.getBalance());




