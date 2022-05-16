# vass-technical-test

This project lets a user create a set of todos tasks using Vue2, Vuex3, Jest, HTML, CSS and Typescript under a SPA paradigm.

Project overview:
![image](https://user-images.githubusercontent.com/30735098/168645971-1dee5764-96eb-432f-b89f-9bc856012202.png)

These tasks can be:

Created by entering any type of word on the input and pressing `enter`,
Checked out by clicking on them,
Deleted by clicking on the `x` icon when hovering,
Edited by double clicking a task (if a task is edited when the content is empty, this task will be deleted) and finish editing it by pressing `enter` or `tab`.

The amount of active tasks (non completed tasks) are counted by the left hand of the footer.
The tasks can be filtered by clicking on the `All`, `Active` and `Completed` buttons on the center of the footer.
The completed tasks can be filtered when clicking the `Clear completed` button on the right side of the footer.

All tasks can be marked as completed when clicking on left top icon.

All tasks are peristed, hence you won't lose progress of current tasks once the page is reloaded.

Setting all todos as completed tasks:
![image](https://user-images.githubusercontent.com/30735098/168646046-dd42dcee-53c8-4ac9-9b96-78003f3091e3.png)

Filtering by completed:
![image](https://user-images.githubusercontent.com/30735098/168646206-0f7d6500-3edd-4e0f-8357-5965594b8663.png)

Editing task:
![image](https://user-images.githubusercontent.com/30735098/168646258-544a4ce0-4f6d-4447-a1f7-fd7dc8e4e37e.png)

## Project setup
Prerequisites: Have `npm` and `git` installed globally on your computer or wherever you want to run this project.

1. Clone the repository by the command `git clone https://github.com/MateoLeon44/vass-technical-test.git` where you want the project to be installed
2. Once in the root of the repository, run ``` npm install ```
3. When `npm install` is finished running, run the command `npm run serve`
4. This project should run on `http://localhost:8080/#/`, however depending on your setup the terminal might run this project in another `port`

### Run your unit tests
For running the unit tests, this project uses `jest`. However, since this dependency is locally installed you don't need `jest` globally on your computer.
Once `npm install` is finished running you can run the code below to run the unit tests.
```
npm run test:unit
```
