const periods = document.querySelectorAll(".period")

periods.forEach((periods) => {
  periods.addEventListener("click", (event) => {
    if (event.target.classlist.contains("cancel-icon")) {
      const item = event.target.closest("li")
      const { id } = item.dataset

      if (id) {
        const isConfirm = confirm("Tem certeza que deseja cancelar este agenamento?")

        if (isConfirm) {
          // remove logic here
        }
      }
    }
  })
})