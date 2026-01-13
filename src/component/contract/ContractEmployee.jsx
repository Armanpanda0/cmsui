import { useEffect, useState } from "react";
import { getContractEmpList } from "../../service/contractEmpService";
import Navbar from "../static/navbar";
import Datatable from "../../datatable/Datatable";
import { useNavigate } from "react-router-dom";
import { MdEdit } from "react-icons/md";
import { Tooltip } from "react-tooltip";

const ContractEmployee = () => {
    const [employeeList, setEmployeeList] = useState([]);
    const navigator = useNavigate();

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

    // Method to handle edit action - navigates to edit page with employee ID
    const EditEmployeeData = (data) => {
        navigator('/employee-addEdit', { state: { item: data } });
    };


const columns = [
        { name: "SN", selector: (row) => row.sn, sortable: true, allign: 'text-center' },
        { name: "Employee Name", selector: (row) => row.empName, sortable: true, allign: 'text-start' },
        { name: "Action", selector: (row) => row.action, sortable: true, allign: 'text-center' },
]
const mapData = () => {
        return employeeList.map((item, index) => ({
            sn: index + 1,
            empName: item?.empName,
            contractEmpId: item?.contractEmpId,
            action: (<><button className="edit me-1"
                    onClick={() => EditEmployeeData(item)} data-tooltip-id="Tooltip"data-tooltip-content="Edit"data-tooltip-place="top"><MdEdit size={24} />
                    </button>
                    <Tooltip id="Tooltip" className='text-white tooltipName' />
                </>)

            
        }));}
            
    return (
        <div>
            <Navbar />
            <h1>Contract Employee</h1>

            {/* {employeeList.length === 0 ? ( 
                <p>No employees found</p>
            ) : (
                <ul>
                    {employeeList.map(emp => (
                        <li key={emp.contractEmpId}>
                            {emp.empName} - {emp.phoneNo}
                        </li>
                    ))}
                </ul>
            )} */}
            <div id="card-body customized-card" className="p-2">
                {<Datatable columns={columns} data={mapData()} />}
            </div>

        </div>
    );
};

export default ContractEmployee;
