const workoutName = document.getElementById("type");
const workourDuration = document.getElementById("min");
const btn = document.querySelector(".button-33");
const errorMessage = document.getElementById("error-message");
const workoutsList = document.getElementById("workout-list");

btn.addEventListener("click", addWorkout);

function addWorkout() {
  const workout = workoutName.value;
  const duration = workourDuration.value;

  if (workout && duration) {
    errorMessage.textContent = "";

    const listItem = document.createElement('li');
    listItem.textContent = `${workout} - ${duration} - minutes`

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'delete';
    deleteBtn.className = 'delete-button';

    deleteBtn.addEventListener('click' , () => {
        workoutsList.removeChild(listItem);
    })

    listItem.appendChild(deleteBtn);
    workoutsList.appendChild(listItem);

    workoutInput.value = '';
    durationInput.value = '';
  }else{
    errorMessage.textContent = 'Please fill in both fields.';
  }
}
