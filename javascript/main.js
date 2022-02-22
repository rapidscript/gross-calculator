function calculateGrossSalary() {
    const base = document.getElementById('basesalary');
    //baseSalary
    const baseSalary = parseInt(base.value);
    // House allowance is 10% of base salary
    const houseAllowance = 0.1 * baseSalary;
    // Transport allowance is fixed for all employees
    const transportAllowance = 5000;
    const gross =  (baseSalary +  houseAllowance + transportAllowance);
    // Map gross value to answer field
    document.getElementById('answer').innerHTML = gross.toString();
}