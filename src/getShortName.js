/**
 * Created by daf on 09.11.2016.
 * На входе строка в виде Имя Отчество Фамилия (или Имя Фамилия или Фамилия),
 * ваша задача сделать вывести инициалы в таком виде:
 * Фамилия И. О. или Фамилия И. или Фамилия
 * Результат нужно вывести в виде строки,
 * при неверных входных данных нужно вывести слово Invalid fullname.
 */

const getShortName = (str) => {
  let result = 'Invalid fullname';
  if ((!str) || (str.length === 0) || (str.search(/[0-9_\/\\]+/) !== -1)) {
    return result;
  }
  const arr = str.replace(/ +/g, ' ').split(' ').filter(item => item !=='');
  if ((arr.length > 0) && (arr.length <= 3)) {
    const arrReverse = arr.reverse();
    if (arr.length === 3) {
      [arrReverse[1], arrReverse[2]] = [arrReverse[2], arrReverse[1]];
    }
    const name = arrReverse[1] ? ` ${arrReverse[1].slice(0, 1).toUpperCase()}.` : '';
    const surname = arrReverse[2] ? ` ${arrReverse[2].slice(0, 1).toUpperCase()}.` : '';
    result = `${arrReverse[0].slice(0,1).toUpperCase()}${arrReverse[0].slice(1).toLowerCase()}${name}${surname}`;
  }
  return result;
};

export default getShortName;
