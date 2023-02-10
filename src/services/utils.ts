const employees: Employee[] = [
  {
    "name": "Minna Nelles",
    "email":"minna.nelles@example.com",
    "thumbnail":"https://randomuser.me/api/portraits/thumb/women/73.jpg"
  },
  {
    "name": "Adam Johnson",
    "email":"adam.johnson@example.com",
    "thumbnail":"https://randomuser.me/api/portraits/thumb/men/39.jpg"
  },
  {
    "name": "مانی حیدری",
    "email":"mny.hydry@example.com",
    "thumbnail":"https://randomuser.me/api/portraits/thumb/men/1.jpg"
  },
  {
    "name": "Elisabete Lacroix",
    "email":"elisabete.lacroix@example.com",
    "thumbnail":"https://randomuser.me/api/portraits/thumb/women/88.jpg"
  },
  {
    "name": "Gérald Marchand",
    "email":"gerald.marchand@example.com",
    "thumbnail":"https://randomuser.me/api/portraits/thumb/men/54.jpg"
  }
];

export const assignTeamMember = ():string => {
  //First, see if users is defined, if not, get them into state
  const selectedEmployee = Math.floor(Math.random() * employees.length);
  return employees[selectedEmployee].email;
}

export const compareObjects = (a, b) => {
 if (a === b) return true;

 if (typeof a !== 'object' || typeof b !== 'object' || a === null || b === null) return false;

 let keysA = Object.keys(a), keysB = Object.keys(b);

 if (keysA.length !== keysB.length) return false;

 for (let key of keysA) {
   if (!keysB.includes(key)) return false;

   if (typeof a[key] === 'function' || typeof b[key] === 'function') {
     if (a[key].toString() !== b[key].toString()) return false;
   } else {
     if (!compareObjects(a[key], b[key])) return false;
   }
 }

 return true;
}