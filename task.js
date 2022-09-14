// event listener listening to the dom loaded
document.addEventListener('DOMContentLoaded', () => {

    // check if the localstroage contains any tasks
    if (localStorage.tasks) {

        // converting the string in localstroage to array and store it in const
        const taskArray = localStorage.tasks.split(',');

        // looping over the tasks in the taskArray
        for (task in taskArray) {

            // create an li element
            const li = document.createElement('li');

            // add task to this li html
            li.innerHTML = taskArray[task];

            // add the li element to the ul element
            document.querySelector('#tasks').append(li);
        };
    };

    // do this function if the user submited the form
    document.querySelector('form').onsubmit = () => {

        // check if  the user typed something or not
        if (document.querySelector('#task').value.length > 2){

            // check if there is no tasks in the localstorage
            if (!localStorage.getItem('tasks')) {

                // add empty list called tasks in localstorage
                localStorage.setItem('tasks', [])

                // add the first value entered by user to tasks list in localstroage
                localStorage.tasks += document.querySelector('#task').value

            // add the other values entered by user
            } else { 
                localStorage.tasks += ',' + document.querySelector('#task').value
            };

            // converting the string in localstroage to array and store it in const
            const taskArray = localStorage.tasks.split(',');
            
            // check if there is already an li element in the dom 
            if (document.querySelectorAll('li').length === 0) {

                // looping over the tasks in the taskArray
                for (task in taskArray) {

                    // create an li element
                    const li = document.createElement('li');

                    // add task to this li html
                    li.innerHTML = taskArray[task];

                    // add the li element to the ul element
                    document.querySelector('#tasks').append(li);
                    };

            } else {
                // create an li element
                const li = document.createElement('li');

                // add the last task in the localstorage to this li html
                li.innerHTML = taskArray[taskArray.length - 1];

                // add the li element to the ul element
                document.querySelector('#tasks').append(li);
            };
        
        } else {
            // if the user didn't type anything or typed something less than 3 letters
            alert('Please type somthing more than three letters!')
        };
        
        // Clear input field
        document.querySelector('#task').value = '';

        // Stop form from submitting
        return false;
    };

    // do this function when user click the delete button
    document.querySelector('#delete').onclick = () => {

        // clear the localstroage
        localStorage.clear()

        // reload the page
        location.reload()
    };

});
