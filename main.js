import users from './users.js'
// console.log(users);
// Завдання 1
// Отримати масив імен всіх користувачів (поле name).
const getUserNames = users => {
    const usersMap = users.map(user => user.name)
    return usersMap;
  };
  
  console.log(getUserNames(users));
// Завдання 2
// Отримати масив об'єктів користувачів за кольором очей (поле eyeColor).
const getUsersWithEyeColor = (users, color) => {
    const usersFilter = users.filter(user => user.eyeColor === color)
    return usersFilter
  };
  
  console.log(getUsersWithEyeColor(users, 'blue'));

//   Завдання 3
//   Отримати масив імен користувачів за статтю (поле gender).
  
  const getUsersWithGender = (users, gender) => {
    const usersFilterAndMap = users.filter(user => user.gender === gender).map(user => user.name)
    return usersFilterAndMap
  };
  
  console.log(getUsersWithGender(users, 'male'));
//   Завдання 4
//   Отримати масив тільки неактивних користувачів (поле isActive).
  
  const getInactiveUsers = users => {
    const usersFilter = users.filter(user => !user.isActive)
    return usersFilter;
  };
  
  console.log(getInactiveUsers(users)); // [об'єкт Moore Hensley, об'єкт Ross Vazquez, об'єкт Blackburn Dotson]
//   Завдання 5
//   Отримати користувача (не масив) по email (поле email, він унікальний).
  
  const getUserWithEmail = (users, email) => {
    const usersFind = users.find(user => user.email === email)
    return usersFind;
  };
  
  console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); 
  console.log(getUserWithEmail(users, 'elmahead@omatom.com')); 
//   Завдання 6
//   Отримати масив користувачів, які потрапляють у вікову категорію від min до max років (поле age).
  
  const getUsersWithAge = (users, min, max) => {
    const usersFilter = users.filter(user => user.age >= min && user.age <= max)
    return usersFilter
  };
  
  console.log(getUsersWithAge(users, 20, 30)); 
  
  console.log(getUsersWithAge(users, 30, 40));
