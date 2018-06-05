export default {
  props: ["options"],
  data() {
    return {
      menuId: "",
      menuIsOpen: false,
      menuRef: null,
      toggleRef: null
    };
  },
  methods: {
    openMenu() {
      this.options.length && (this.menuIsOpen = true);
    },
    closeMenu() {
      this.menuIsOpen = false;
    },
    execute(option) {
      option.action && option.action();
      this.$emit("itemClicked", option);
      this.closeMenu();
    }
  },
  mounted() {
    this.toggleRef = this.$refs.toggle;
    this.menuRef = this.$refs.menuCard;
    let toggleRect = this.toggleRef.getBoundingClientRect();
    let menuRect = this.menuRef.getBoundingClientRect();
    let menuStart = toggleRect.left + toggleRect.width;
    //currently scaled down by .1, multiply by 10 to accomodate. Couples this to it's styl file
    this.menuRef.style.left = `${menuStart - menuRect.width * 10}px`;
  }
};
