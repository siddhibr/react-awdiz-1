export const ADD="ADD";
export const DELET="DELETE";

export const add=(id, todo)=>{

    const task={

        id: id,
        task: todo
    }
    return{

        type: ADD,
        payload:task
    }
}

export const delet=(id)=>{

    return{

        type: DELET,
        payload:id
    }
}