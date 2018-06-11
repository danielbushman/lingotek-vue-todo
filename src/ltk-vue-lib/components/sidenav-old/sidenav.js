import NavButtons from './nav-buttons/nav-buttons';
import SubNavMenu from './sub-nav-menu/sub-nav-menu';

export default {
  components: {
    NavButtons,
    SubNavMenu,
  },
  props: {
    navigation: {
      type: Array,
      default: () => [],
    },
    utilities: {
      type: Array,
      default: () => [],
    },
    expanded: {
      type: Boolean,
      default: () => true,
    },
    allowExpand: {
      type: Boolean,
      default: () => true,
    },
  },
  data() {
    return {
      subNavExpanded: false,
      currentSubNav: [],
    };
  },
  methods: {
    toggleSubnav(event) {
      this.subNavExpanded = !this.subNavExpanded;
      const subnav = this.$refs.subMenu.$refs.element;
      if (this.subNavExpanded) {
        const rect = event.currentTarget.getBoundingClientRect();
        subnav.style.top = `${rect.top}px`;
        subnav.offsetHeight = subnav.offsetHeight; // forces css reflow
        this.$nextTick(() => {
          const subnavRect = subnav.getBoundingClientRect();
          if (subnavRect.bottom > window.innerHeight) {
            const newTop = window.innerHeight - (subnavRect.height + 8);
            subnav.style.top = `${newTop}px`;
          }
        });
        subnav.style.transition = 'all .2s cubic-bezier(.25,.8,.25,1)';
        subnav.style.left = this.expanded ? '243px' : '59px';
      } else {
        subnav.style.left = '-240px';
        subnav.style.zIndex = 50;
        subnav.offsetHeight = subnav.offsetHeight; // forces css reflow
        subnav.style.transition = '0ms';
      }
      this.$emit('sidenav-toggled', this.expanded);
      window.setTimeout(() => {
        if (this.expaned) subnav.style.zIndex = 52;
      }, 200);
    },
    // toggleExpanded() {
    //   this.$emit('sidenav-toggled');
    // },
  },
};
