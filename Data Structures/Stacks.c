// Below is an implementation of stack data structure and it's methods

// code for a stack

// define the libraries we will use
#include <stdio.h>
#include <string.h>
#include <stdlib.h>

// define the structure of a plate
struct Plate
{
    char name[25];
    float price;
    struct Plate *next;
};

// define the global variable top
struct Plate *top = NULL;

// function to check if stack is empty
int IsEmpty()
{
    return top == NULL; // returns a boolean, 1 if stack is empty, 0 if stack is not empty
}

// function to add elements to the stack
void Push(char name[], float price)
{
    struct Plate *newPlate = (struct Plate *)malloc(sizeof(struct Plate)); // allocate memory for the new plate
    if (newPlate == NULL)
    { // check if memory allocation failed
        printf(" Memory allocation failed ! \n");
        return; // exit the Push function
    }
    // set plate data, memory allocation was successful
    strcpy(newPlate->name, name);
    newPlate->price = price;
    newPlate->next = top;
    top = newPlate; // set our new plate as the top plate
}

// function to remove element from the stack
void Pop()
{
    if (IsEmpty())
    { // check if stack is empty before trying to remove elements
        printf(" Cannot Pop, stack is empty ! \n");
        return; // exit from Pop function
    }
    // remove the top plate since stack has elements
    struct Plate *temp = top;
    top = top->next;
    printf("Popped Name: %s, Price:%.2f \n", temp->name, temp->price);
    free(temp); // free the top element
}

// function to check the top element
void Peek()
{
    printf("\n"); // good bit of indentation
    if (IsEmpty())
    { // check if stack is empty before trying to Peek
        printf(" Cannot Peek, stack is empty ! \n");
        return; // exit from Peek function
    }
    // Peek when stack has elements
    printf("Top element name : %s, Top element price : %.2f \n", top->name, top->price); // display the top element
}

// function to display all elements
void Display()
{
    if (IsEmpty())
    { // check if stack is empty before displaying elements
        printf(" Cannot Display elements, stack is empty ! \n");
        return; // exit from Display function
    }

    // stack has elements
    struct Plate *temp = top; // temp variable for iteration
    printf(" \n");            // adequate spacing
    printf(" Stack Contents : \n");
    while (temp != NULL)
    { // iterate through the whole stack printing each element
        printf(" Name: %s, Price: %.2f\n", temp->name, temp->price);
        temp = temp->next;
    }
    printf("\n\n"); // adequate spacing
}

// main function, for implementing the stack and it's methods
int main()
{

    // insert 5 plates
    Push("Ugali Beef", 2.50);
    Push("Pilau", 3.00);
    Push("Chai & Chapati", 1.50);
    Push("Chicken Tikka", 6.50);
    Push("Pusin Chips", 4.50);

    // display the plates
    Display();

    // remove two plates
    Pop();
    Pop();

    // check the top element
    Peek();

    // display the remaining elements
    Display();

    return 0;
}
