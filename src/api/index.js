export const fetchQuestions = (id) => {
  return (fetch(`https://final-project-api-veooltntuq-lz.a.run.app/questions/${id}`)
    .then((data) => data.json)
  )
}