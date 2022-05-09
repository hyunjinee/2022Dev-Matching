export default function SearchInput({ $target, initialState, onChange }) {
  this.$element = document.createElement("form")
  this.$element.className = "SearchInput"
  this.state = initialState

  $target.appendChild(this.$element)

  this.$element.addEventListener("keyup", (e) => {
    onChange(e.target.value)
  })

  this.render = () => {
    this.$element.innerHTML = `
      <input class="SearchInput__input" type="text" placeholder="프로그램 언어를 입력하세요." value="${this.state}">
    `
  }

  this.render()
}
