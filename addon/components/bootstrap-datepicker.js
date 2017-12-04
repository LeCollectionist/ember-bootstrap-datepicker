import Ember from 'ember';
import DatepickerSupport from 'lecollectionist-ember-bootstrap-datepicker/components/datepicker-support';

export default Ember.Component.extend(DatepickerSupport, {
  instrumentDisplay: '{{input type="text"}}',

  classNames: ['ember-text-field'],

  tagName: 'input',

  attributeBindings: [
    'accesskey',
    'autocomplete',
    'autofocus',
    'contenteditable',
    'contextmenu',
    'dir',
    'disabled',
    'draggable',
    'dropzone',
    'form',
    'hidden',
    'id',
    'lang',
    'list',
    'max',
    'min',
    'name',
    'placeholder',
    'readonly',
    'required',
    'spellcheck',
    'step',
    'tabindex',
    'title',
    'translate',
    'type'
  ],

  type: 'text',

  forceParse: true,

  focusOut() {
    if (this.get('forceParse')) {
      this._forceParse($('.day:hover').data('date'));
    }

    if(this.get('autoclose')) {
      $('.datepicker').hide();
    }
  },

  _forceParse(data) {
    let date = new Date(data);

    if (!isNaN(date)) {
      this.set('value', date);
      this.sendAction('changeDate', date);
    }
  }
});
