export default function Suggestion({ $target, initialState }) {
  this.$element = document.createElement("div")
  this.$element.className = "Suggestion"
  $target.appendChild(this.$element)

  this.state = {
    selectedIndex: 0,
    items: initialState.items,
  }

  this.setState = (nextState) => {
    this.state = {
      ...this.state,
      nextState,
    }
    this.render()
  }

  this.render = () => {
    const { items = [], selectedIndex } = this.state
    if (items.length > 0) {
      this.$element.style.display = "block"
      this.$element.innerHTML = `
        <ul>
          ${items
            .map(
              (item, index) => `
            <li data-index="${
              index === selectedIndex ? "Suggestion__item--selected" : ""
            }">${item}</li>
          `
            )
            .join("")}
        </ul>
      `
    } else {
      this.$element.style.display = "none"
      this.$element.innerHTML = ""
    }
  }

  this.render()
}
