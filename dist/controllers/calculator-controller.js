function convertCLTToPJ(req, res) {
    var salary = req.query.salary;
    var newSalary = Number(salary) + (Number(salary) * 0.3);
    res.send({
        resultado: "O seu salario \u00E9 ".concat(newSalary)
    });
}
export { convertCLTToPJ };
