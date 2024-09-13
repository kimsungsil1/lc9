let employees = [];

function addEmployee() {
    const nameInput = document.getElementById('employee-name');
    const thoughtInput = document.getElementById('employee-thought');

    const employee = {
        name: nameInput.value,
        thought: thoughtInput.value
    };

    employees.push(employee);
    nameInput.value = '';
    thoughtInput.value = '';

    renderEmployees();
}

function renderEmployees() {
    const employeeList = document.getElementById('employee-list');
    employeeList.innerHTML = '';

    employees.forEach((employee, index) => {
        const employeeCard = document.createElement('div');
        employeeCard.className = 'employee-card';

        const employeeName = document.createElement('h3');
        employeeName.innerText = employee.name;

        const thoughtBubble = document.createElement('div');
        thoughtBubble.className = 'thought-bubble';
        thoughtBubble.innerText = employee.thought;

        employeeCard.appendChild(employeeName);
        employeeCard.appendChild(thoughtBubble);

        employeeList.appendChild(employeeCard);
    });
}
