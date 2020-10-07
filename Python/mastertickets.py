TICKET_PRICE = 10
ticket_remaining = 100

#Output the number of tickets remaining
print('There are {} tickets remaining'.format(ticket_remaining))

#Take the user's name and assign it to a variable
username = input("Please enter your name?  ")

#Prompt the user by name for the nnumber of tickets needed
number_of_tickets = int(input("Welcome {}, how many tickets do you want to purchase?  ".format(username)))

#Calculate the cost of the tickets and store it in a variable
tickets_cost = number_of_tickets * TICKET_PRICE

#Output the cost of the tickets to the user
print("Okay {}, the cost of {} tickets is ${} .".format(username, number_of_tickets, tickets_cost))