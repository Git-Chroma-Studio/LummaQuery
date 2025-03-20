/**
 * Extensões personalizadas para jQuery
 */
(function ($) {

    "use strict";

    $.fn.extend({

        /**
         * Retorna o ID do primeiro elemento no conjunto.
         * @returns {string} ID do elemento.
         */
        id: function () {
            return $(this).get(0).id;
        },

        /**
         * Habilita os elementos selecionados.
         * @returns {jQuery} Conjunto jQuery para encadeamento.
         */
        enabled: function () {
            return this.each(function () {
                this.disabled = false;
            });
        },

        /**
         * Desabilita os elementos selecionados.
         * @returns {jQuery} Conjunto jQuery para encadeamento.
         */
        disabled: function () {
            return this.each(function () {
                this.disabled = true;
            });
        },

        /**
         * Marca os checkboxes selecionados.
         * @returns {jQuery} Conjunto jQuery para encadeamento.
         */
        check: function () {
            return this.each(function () {
                this.checked = true;
            });
        },

        /**
         * Desmarca os checkboxes selecionados.
         * @returns {jQuery} Conjunto jQuery para encadeamento.
         */
        uncheck: function () {
            return this.each(function () {
                this.checked = false;
            });
        },

        /**
         * Serializa os dados do formulário para um objeto JSON.
         * @returns {Object} Dados do formulário em formato JSON.
         */
        serializeJson: function () {
            const formData = {};
            Array.from(this.get(0).elements).forEach(element => {
                if (!element.name || element.disabled) return;

                switch (element.type) {
                    case "checkbox":
                        if (!formData[element.name]) {
                            formData[element.name] = [];
                        }
                        if (element.checked) {
                            formData[element.name].push(element.value || true);
                        }
                        break;
                    case "radio":
                        if (element.checked) {
                            formData[element.name] = element.value;
                        }
                        break;
                    case "select-multiple":
                        formData[element.name] = Array.from(element.selectedOptions).map(option => option.value);
                        break;
                    case "file":
                        formData[element.name] = Array.from(element.files);
                        break;
                    default:
                        if (formData[element.name]) {
                            if (!Array.isArray(formData[element.name])) {
                                formData[element.name] = [formData[element.name]];
                            }
                            formData[element.name].push(element.value.trim());
                        } else {
                            formData[element.name] = element.value.trim();
                        }
                }
            });
            return formData;
        },

        /**
         * Alterna um atributo entre dois valores especificados.
         * @param {string} attr - O nome do atributo.
         * @param {string} value1 - Primeiro valor do atributo.
         * @param {string} value2 - Segundo valor do atributo.
         * @returns {jQuery} Conjunto jQuery para encadeamento.
         */
        toggleAttr: function (attr, value1, value2) {
            return this.each(function () {
                var $el = $(this);
                if ($el.attr(attr) === value1) {
                    $el.attr(attr, value2);
                } else {
                    $el.attr(attr, value1);
                }
            });
        },

        /**
         * Verifica se o elemento possui um atributo específico.
         * @param {string} attr - O nome do atributo.
         * @returns {boolean} Verdadeiro se o atributo existir, falso caso contrário.
         */
        hasAttr: function (attr) {
            return this.attr(attr) !== undefined;
        },

        /**
         * Verifica se o elemento contém um filho correspondente ao seletor.
         * @param {string} selector - Seletor do filho a ser verificado.
         * @returns {boolean} Verdadeiro se existir pelo menos um filho correspondente.
         */
        hasElement: function (selector) {
            return this.find(selector).length > 0;
        },

        /**
         * Retorna o nome da tag do primeiro elemento do conjunto.
         * @returns {string} Nome da tag.
         */
        tag: function () {
            return this.get(0).localName;
        },

        /**
         * Reseta os campos do formulário.
         */
        reset: function () {
            this.get(0).reset();
        }

    });
})(jQuery);