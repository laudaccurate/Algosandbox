// Generator functions are basically iteration functions and they work with the
// for-of loop. Generators are used to customize iteration over various objects.
// A Generator function returns a Generator object. The yield keyword is used to
// yield a value from a Generator function. The [Symbol.iterator] is used to
// define a generator for an object within its declaration. Generator Delegation
// is used to invoke a Generator function B anytime Generator function A is called
// Generators can be used for recursion

//Example One - Engineering Team Members
const testingTeam = {
  lead: "Derllene Kwansa",
  tester: "Eugene Debrah",
  [Symbol.iterator]: function*() {
    yield this.lead;
    yield this.tester;
  }
};

const engineeringTeam = {
  testingTeam,
  size: 5,
  department: "Engineering",
  manager: "Christian Owusu",
  lead: "David Appoh",
  engineer: "Bello Mustapha",
  intern: "Laud Gilbert",
  mediaPersonnel: "Ben Parker",
  [Symbol.iterator]: function*() {
    yield this.manager;
    yield this.lead;
    yield this.engineer;
    yield this.intern;
    yield this.mediaPersonnel;
    yield* this.testingTeam;
  }
};

let teamMembers = [];

for (const member of engineeringTeam) {
  teamMembers.push(member);
}

// console.log(teamMembers);

// Example Two - Tree-like Comments

class Comment {
  constructor(content, childComments) {
    this.content = content;
    this.childComments = childComments;
  }

  *[Symbol.iterator]() {
    yield this.content;
    for (let comment of this.childComments) {
      yield* comment;
    }
  }
}

const childComments = [
  new Comment("I totally agree with you", [
    new Comment("NO politics please", [])
  ]),
  new Comment("Tell'em man", [
    new Comment("hahahaha", [
      new Comment("Not funny", [new Comment("At all...", [])])
    ])
  ]),
  new Comment("You know that is not true", []),
  new Comment("Don't take it personal", [
    new Comment("This is general", [new Comment("Absolutely!!", [])]),
    new Comment("You barb???", [])
  ])
];

const commentTree = new Comment("Christ is the only Way to God", childComments);

const allComments = [];

for (const comment of commentTree) {
  allComments.push(comment);
}

console.log(allComments);
