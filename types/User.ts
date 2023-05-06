export interface BaseUser {
    content : {
        access_token : string,
        expires_in : number,
        first_name : string,
        id : number,
        initial : string,
        is_cashier : boolean,
        is_head : boolean,
        last_name : string,
        // password : string,
        apiUrl: string
        refresh_token : string,
        school : string,
        scope : string,
        token_type : "Bearer",
        username : string,
        type : "Student",
        userInfo :  StudentUser,
    }
  }

  interface TeacherUser {
    designation : {name : string}
    employee_no : string,
    first_name : string,
    id : string,
    last_name : string,
    middle_name : string,
    picture : string | null,
    tenant : string,
    user_id : number,
  }

  interface StudentUser {
    id : string,
    student : {
      first_name : string,
      gender : string,
      id : string,
      last_name : string,
      middle_name :string,
      picture : string | null,
      student_no : string,
      user_id : string,
    }
  }
