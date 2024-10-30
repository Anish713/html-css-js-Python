from bank_accounts import *

Anish = BankAccount(1000, "Anish")
Pratigya = BankAccount(2000, "Pratigya")

Anish.get_balance()
Pratigya.get_balance()

Pratigya.deposit(500)

Anish.withdraw(10000)
Anish.withdraw(10)

Anish.transfer(10000, Pratigya)
Anish.transfer(100, Pratigya)

Jim = InterestRewardsAcct(1000, "Jim")

Jim.get_balance()

Jim.deposit(100)

Jim.transfer(100, Anish)

Blaze = SavingsAcct(1000, "Blaze")

Blaze.get_balance()

Blaze.deposit(100)

Blaze.transfer(10000, Pratigya)
Blaze.transfer(1000, Pratigya)
