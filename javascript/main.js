function calculateGrossSalary() {
    var base = document.getElementById('basesalary');
    // House allowance is 10% of base salary
    var houseAllowance = 0.1 * base.value;
    // Transport allowance is fixed for all employees
    const TRANSPORT_ALLOWANCE = 5000;
    var gross =  base.value + houseAllowance + TRANSPORT_ALLOWANCE;
}

/* Change the theme of the website from a light theme to a dark theme */

function darktheme(){
    var element=document.body;
    element.classList.toggle("dark-mode");
}