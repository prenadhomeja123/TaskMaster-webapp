// JavaScript code to handle task creation and display
document.addEventListener('DOMContentLoaded', function () {
  const taskForm = document.getElementById('taskForm')
  const taskList = document.getElementById('taskList')
  const taskListSidebar = document.getElementById('taskListSidebar')
  const toggleSidebarButton = document.getElementById('toggleSidebar')
  const clearButton = document.getElementById('clearTaskList')

  taskForm.addEventListener('submit', function (e) {
    e.preventDefault()
    const taskName = document.getElementById('taskName').value
    const taskDescription = document.getElementById('taskDescription').value
    const assigneeT = document.getElementById('assignToTeam').value
    const assigneeM = document.getElementById('assignToMember').value
    const priority = document.getElementById('priority').value
    const dueDate = document.getElementById('dueDate').value

    // Create a new task item
    const taskItem = document.createElement('li')
    taskItem.innerHTML = `<strong>${taskName}</strong> - Assigned to: ${assigneeT} - Assigned to Member :${assigneeM} - Priority: ${priority} - dueDate :${dueDate} <br>${taskDescription}`

    // Add the task to the task list
    taskList.appendChild(taskItem)

    taskForm.reset()

    // Check if there are tasks in the list
    if (taskList.children.length > 0) {
      clearButton.style.display = 'block' // Show the clear button
    }
  })

  // Toggle task list sidebar
  toggleSidebarButton.addEventListener('click', function () {
    taskListSidebar.classList.toggle('show-sidebar')
  })

  // Clear task list
  clearButton.addEventListener('click', function () {
    taskList.innerHTML = ''
    clearButton.style.display = 'none' // Hide the clear button
  })
})
// JavaScript code to handle task creation and display
document.addEventListener('DOMContentLoaded', function () {
  // ...

  taskForm.addEventListener('submit', function (e) {
    e.preventDefault()

    // ...

    // Schedule a notification if a due date is provided
    if (dueDate) {
      const currentDate = new Date()
      const taskDueDate = new Date(dueDate)

      // Calculate the time difference in milliseconds
      const timeDifference = taskDueDate - currentDate

      if (timeDifference > 0) {
        // Schedule a notification for the task's due date
        setTimeout(function () {
          showNotification()
        }, timeDifference)
      }
    }
  })

  //  display the notification
  function showNotification() {
    const notificationContainer = document.getElementById(
      'notification-container'
    )
    notificationContainer.style.display = 'block'

    // Hide the notification after a few seconds (e.g., 5 seconds)
    setTimeout(function () {
      notificationContainer.style.display = 'none'
    }, 5000) // 5000 milliseconds (5 seconds)
  }

  // ...
})
