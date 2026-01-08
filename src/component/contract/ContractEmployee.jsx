import { useEffect, useState } from "react";
import { getContractEmpList } from "../../service/contractEmpService";
import Navbar from "../static/navbar";
const ContractEmployee = () => {
    const [employeeList, setEmployeeList] = useState([]);

    useEffect(() => {
        fetchEmployeeList();
        console.log(employeeList,"=============Employee================")
    }, []); // ✅ dependency array added

    const fetchEmployeeList = async () => {
        try {
            const list = await getContractEmpList();
            console.log("Employee List=============", list);
            setEmployeeList(list); // ✅ set state
        } catch (error) {
            console.error("Failed to fetch employee list", error);
        }
    };

    return (
        <div>
            <Navbar />
            <h1>Contract Employee</h1>

            {employeeList.length === 0 ? (
                <p>No employees found</p>
            ) : (
                <ul>
                    {employeeList.map(emp => (
                        <li key={emp.contractEmpId}>
                            {emp.empName} - {emp.phoneNo}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ContractEmployee;
