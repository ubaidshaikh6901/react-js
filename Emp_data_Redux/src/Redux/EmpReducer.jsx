import { ADD_EMP, DELETE_EMP, EDIT_EMP, VIEW_EMP } from "./Action";

const intialState = {
    employee: [],
}

const EmpReducer = (state = intialState, action) => {
    switch (action.type) {
        case DELETE_EMP:
            return {
                ...state.employee,
                employee: state.employee.filter((v, i) => i !== action.payload),
            };
        case ADD_EMP:
            return {
                ...state.employee,
                employee: [...state.employee, action.payload],
            };
        case VIEW_EMP:
            return state;
        
        case EDIT_EMP :
            console.log(action.payload.pos)
            return {
                ...state.employee,
                employee: state.employee.map((v,i)=> (i == action.payload.pos ? action.payload.employeeData :v))
            }

        default:
            return state;
    }
}

export default EmpReducer;

