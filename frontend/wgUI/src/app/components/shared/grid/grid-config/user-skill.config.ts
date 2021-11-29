export function userSkillColumnGridData() {
    const config = {
        colData : [
            {
                field: 'id', 
                header: 'id',
                type: 'text'
            },
            {
                field: 'username', 
                header: 'username',
                type: 'text'
            },
            {
                field: 'name', 
                header: 'skill name',
                type: 'text'
            },
            {   field: 'description', 
                header: 'description',
                type: 'text'
            },
            {   field: 'email', 
                header: 'email',
                type: 'text'
            }
          ]
    }
    return config;
}