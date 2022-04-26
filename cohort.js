const cohort = {
  name: 'May2022',
  id: 1234,
  students: ['Baljit','Michael','Alexis']
}

const display = (func) =>{
  console.log(`<${func.id}> -<${func.name}-<${func.students.length}> students in this cohort`)
}