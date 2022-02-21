function calculateGrossSalary() {
    var base = document.getElementById('basesalary');
    // House allowance is 10% of base salary
    var houseAllowance = 0.1 * base.value;
    // Transport allowance is fixed for all employees
    const TRANSPORT_ALLOWANCE = 5000;
    var gross =  base.value + houseAllowance + TRANSPORT_ALLOWANCE;
}