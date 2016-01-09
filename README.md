# Javascript PIN Guess

## Instructions
There are 10,000 possible combinations for 4-digit pin number using digits 0-9. In this program, we'll see how we can use loops to guess that a 4-digit pin in only a few seconds.

Create a global variable called `pinCode` and set it to a 4-digit code using 0-9. Since we want the pin code to support combinations starting with 0, we'll want to use a string instead of a number:
```
var pinCode = "0049";
```

Create a function called `check` that takes a possible combination in as a parameter and returns either true or false.

Write a loop (for or while) that iterates through every number from 0 - 9999, checking each one for the combination. The loop should terminate if it guesses correctly or if it reaches 9999.

Use the provided `leftPad` function to turn your numbers in to 4-digit pins with leading 00's. For example:
```
var a = 10;
var as = leftPad(10, 4);
// as is now "0010"
```

Submit the assignment by submitting a pull request. The steps to do that are as follows:

1. To start, [**fork** the repository][forking].
1. [**Clone**][ref-clone] the repository to your computer.
1. Modify the files and [**commit**][ref-commit] changes to complete your solution.
1. [**Push**][ref-push]/sync the changes up to GitHub.
1. [Create a **pull request**][pull-request] on the original repository to turn in the assignment.

<!-- Links -->
[create-repo]: https://help.github.com/articles/create-a-repo
[private-repos]: /guide/private_repos
[add-to-team-action]: https://github.com/education/teachers_pet/#giving-others-access
[teachers-pet]: https://github.com/education/teachers_pet
[help-add-to-team]: https://help.github.com/articles/adding-organization-members-to-a-team
[help-access-control]: https://help.github.com/articles/what-are-the-different-access-permissions#organization-accounts
[forking]: https://guides.github.com/activities/forking/
[ref-clone]: http://gitref.org/creating/#clone
[ref-commit]: http://gitref.org/basic/#commit
[ref-push]: http://gitref.org/remotes/#push
[pull-request]: https://help.github.com/articles/creating-a-pull-request
[raw]: https://raw.githubusercontent.com/education/guide/master/docs/forks.md
