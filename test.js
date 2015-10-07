export const rules = [
  {
    id: 1,
    title: 'the first',
    rule: function (data) {
      return data.one
    },
    true_id: 2,
    false_id: 3
  },
  {
    id: 2,
    title: 'the second',
    rule: function (data) {
      return data.two
    },
    true_id: null,
    false_id: null
  },
  {
    id: 3,
    title: 'the third',
    rule: function (data) {
      return data.three
    },
    true_id: null,
    false_id: null
  }
]

export const data = {
  one: false,
  two: true,
  three: false
}