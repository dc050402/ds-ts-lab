import {colleagues, friends } from './01-basics'
import {Friend, Colleague, EmailContact} from './myTypes'

function older(f: Friend) : string {
     f.age += 1
     return `${f.name} is now ${f.age}` 
}

console.log(older(friends[0]))

// Find the colleague with the highest extension number.
function highestExtension(cs: Colleague[]): Colleague {
  const result = cs.sort(
    (c1, c2) => c1.contact.extension - c2.contact.extension
  );
  return result[cs.length - 1];
}

console.log(highestExtension(colleagues.current));

// Add Colleague Function
function addColleague(
  cs: Colleague[],
  name: string,
  department: string,
  email: string
) {

  const highest = highestExtension(cs);

  const newColleague: Colleague = {
    name: name,
    department: department,
    contact: {
      email: email,
      extension: highest.contact.extension + 1
    }
  };

  cs.push(newColleague);

}

addColleague(colleagues.current, "Sheild O Connell", "HR", "soc@here.com");
console.log(colleagues.current.filter((c) => c.name === "Sheild O Connell"));

//Dort Colleagues
function sortColleagues(
  colleagues: Colleague[],
  sorter: (c1: Colleague, c2: Colleague) => number
): EmailContact[] {
  const sorted = colleagues.sort(sorter); // Colleague[] inferred
  const result: EmailContact[] = sorted.map((ce) => ({ name: ce.name, email: ce.contact.email }));
  return result 
}

console.log(sortColleagues(colleagues.current, (a, b) => a.contact.extension - b.contact.extension));
console.log(sortColleagues(colleagues.current, (a, b) => a.name.length - b.name.length));

//Find friends
function findFriends(
  friends: Friend[],
  criterion: (friend: Friend) => boolean
): string[] {
  return friends
  .filter(criterion)
  .map((friend) => friend.name);
}

console.log(findFriends(friends, (friend) => friend.name.startsWith('Pa')));
console.log(findFriends(friends, (friend) => friend.age < 30));


