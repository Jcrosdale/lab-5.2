How did event.preventDefault () help in handling form submission?

The event.preventDefault helped to prevent the browser's default action which is to reload the page. This allows more control through JavaScript, especially when there are multiple user inputs. It also gives more time to validate each input between each of them.

What is the difference between using HTML5 validation attributes and JavaScript-based validation? Why might you use both?

HTML5 validation attributes relies on the built-in browser features, whereas JavaScript-based validation relies on custom features to handle form data. Both are useful to use due to HTML5's high accessibility and JavaScript's more dynamic, specific functioning. Through JavaScript, validations can be run at chosen moments such as through event listeners, rather than waiting for the full form to be submitted.

Explain how you used localStorage to persist and retrieve the username. What are the limitations of localStorage for storing sensitive data?

localStorage was used through: const storedUsername = localStorage.getItem('username');. The variable was then run through a JSON parse all contained in a function to be called later. localStorage is highly convenient, however it shouldn't be used for more sensiitve information such as banking information or passwords.

Describe a challenge you faced in implementing the real-time validation and how you solved it.

Due to client-side validation being new to me, I referred back to class notes and added comments to keep track of the validations needed. Knowing how to structure the functions, when to create variables, and the overall logic when applying validation was the most difficult. However, going function by function and line by line in the instructions helped to only add code when necessary.

How did you ensure that custom error messages were user-friendly and displayed at the appropriate times?

I ensured error messages were user-friendly and displayed at appropriate times by using if statements, styling, and error messages. Focus is put on each input only when the required information was provided for the previous one. When there's a failed validation, a message will be displayed or styling will appear in the form of a red color indicator.

