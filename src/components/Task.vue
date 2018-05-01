<template>
  <label class="panel-block">
    <div class="control">
      <div class="columns is-mobile">
        <div class="column is-10 has-text-left">
          <label class="checkbox is-medium">
            <input
              :checked="task.completed"
              type="checkbox"
              @change="$emit('toggle', task)"
            >
            {{ task.name }}
          </label>
        </div>
        <div class="column is-2 has-text-right">
          <button
            class="delete is-medium"
            @click.prevent="$emit('remove', task)"
          />
        </div>
      </div>
    </div>
  </label>
</template>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome';

export default {
  name: 'Task',
  components: { FontAwesomeIcon },
  props: {
    task: {
      type: Object,
      default: () => ({ id: '', name: '', completed: false }),
    },
  },
};
</script>
