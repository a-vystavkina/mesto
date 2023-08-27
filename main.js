(()=>{"use strict";document.querySelector(".profile__edit-button");var t=document.querySelector(".popup_type_edit-card"),e=t.querySelector(".popup__form"),n=t.querySelector('input[name="name"]'),r=t.querySelector('input[name="job"]'),o=document.querySelector(".profile__title"),i=document.querySelector(".profile__subtitle"),u=document.querySelector(".profile__add-button"),l=document.querySelector(".popup_type_add-card").querySelector(".popup__form"),a=(document.querySelector(".elements"),document.querySelector(".element-template").content,document.querySelector(".popup_type_edit-avatar").querySelector(".popup__form")),c=document.querySelector(".profile__avatar-btn"),s=document.querySelector(".profile__avatar"),f={popupForm:".popup__form",inputErrorClass:"form__input_type_error",inputErrorActive:"form__input-error_active",formInput:".form__input",formSubmit:".form__button"};function p(t){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},p(t)}function y(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==p(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==p(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===p(o)?o:String(o)),r)}var o}var m=function(){function t(e,n){var r=e.items,o=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._items=r,this._renderer=o,this._container=document.querySelector(n)}var e,n;return e=t,(n=[{key:"renderItems",value:function(){var t=this;this._items.forEach((function(e){t._renderer(e)}))}},{key:"addItem",value:function(t){this._container.prepend(t)}}])&&y(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function d(t){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},d(t)}function v(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==d(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==d(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===d(o)?o:String(o)),r)}var o}var h=function(){function t(e){var n=e.data,r=e.cardSelector,o=e.userId,i=e.handleCardClick,u=e.handleDeleteIconClick,l=e.handleSetLike,a=e.handleRemoveLike;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=n.name,this._link=n.link,this._cardSelector=r,this._userId=o,this._cardId=n._id,this._cardOwnerId=n.owner._id,this._handleCardClick=i,this._handleDeleteIconClick=u,this._likes=n.likes,this._handleSetLike=l,this._handleRemoveLike=a}var e,n;return e=t,(n=[{key:"_getTemplate",value:function(){return this._card=document.querySelector(this._cardSelector).content.querySelector(".element").cloneNode(!0),this._card}},{key:"deleteCard",value:function(){this._element.remove(),this._element=null}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._image=this._element.querySelector(".element__image"),this._likeBtn=this._element.querySelector(".element__like"),this._deleteBtn=this._element.querySelector(".element__delete"),this._image.src=this._link,this._image.alt=this._name,this._element.querySelector(".element__title").textContent=this._name,this._hasDeleteBtn(),this._isCardLiked(),this._likesNumber.textContent=this._likes.length,this._setEventListeners(),this._element}},{key:"_isCardLiked",value:function(){var t=this;this._likes.some((function(e){return t._userId===e._id}))&&this._likeBtn.classList.add("element__like_active")}},{key:"handleLikeCard",value:function(t){this._likes=t.likes,this._likesNumber.textContent=this._likes.length,this._likeBtn.classList.toggle("element__like_active")}},{key:"_hasDeleteBtn",value:function(){this._userId!==this._cardOwnerId&&this._deleteBtn.remove()}},{key:"_setEventListeners",value:function(){var t=this;this._image.addEventListener("click",(function(){t._handleCardClick(t._name,t._link)})),this._deleteBtn.addEventListener("click",(function(){t._handleDeleteIconClick(t._cardId)})),this._likeBtn.addEventListener("click",(function(){t._likeBtn.classList.contains("element__like_active")?t._handleRemoveLike(t._cardId):t._handleSetLike(t._cardId)}))}}])&&v(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function b(t){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},b(t)}function _(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==b(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==b(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===b(o)?o:String(o)),r)}var o}var S=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._validationConfig=e,this._formElement=n,this._inputList=Array.from(this._formElement.querySelectorAll(this._validationConfig.formInput)),this._buttonElement=this._formElement.querySelector(this._validationConfig.formSubmit)}var e,n;return e=t,(n=[{key:"_setEventListeners",value:function(){var t=this;this.toggleButtonState(),this._inputList.forEach((function(e){e.addEventListener("input",(function(){t._checkInputValidity(e),t.toggleButtonState()}))}))}},{key:"_checkInputValidity",value:function(t){t.validity.valid?this._hideInputError(t):this._showInputError(t,t.validationMessage)}},{key:"_showInputError",value:function(t,e){var n=this._formElement.querySelector("#".concat(t.id,"-error"));t.classList.add(this._validationConfig.inputErrorClass),n.textContent=e,n.classList.add(this._validationConfig.inputErrorActive)}},{key:"_hideInputError",value:function(t){var e=this._formElement.querySelector("#".concat(t.id,"-error"));t.classList.remove(this._validationConfig.inputErrorClass),e.classList.remove(this._validationConfig.inputErrorActive),e.textContent=""}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(t){return!t.validity.valid}))}},{key:"toggleButtonState",value:function(){this._hasInvalidInput()?this._buttonElement.disabled=!0:this._buttonElement.disabled=!1}},{key:"enableValidation",value:function(){this._setEventListeners()}}])&&_(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function g(t){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},g(t)}function w(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==g(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==g(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===g(o)?o:String(o)),r)}var o}var k=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._popup=document.querySelector(e),this._handleEscClose=this._handleEscClose.bind(this)}var e,n;return e=t,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(t){"Escape"===t.key&&this.close()}},{key:"setEventListeners",value:function(){var t=this;this._popup.addEventListener("mousedown",(function(e){e.target===e.currentTarget&&t.close()})),this._closeButton=this._popup.querySelector(".popup__close"),this._closeButton.addEventListener("click",(function(){t.close()}))}}])&&w(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function E(t){return E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},E(t)}function j(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==E(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==E(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===E(o)?o:String(o)),r)}var o}function O(){return O="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=P(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},O.apply(this,arguments)}function C(t,e){return C=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},C(t,e)}function P(t){return P=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},P(t)}var L=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&C(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=P(r);if(o){var n=P(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===E(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e,n=t.popupSelector,r=t.handleFormSubmit;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,n))._handleFormSubmit=r,e._popupForm=e._popup.querySelector(".popup__form"),e._inputList=e._popupForm.querySelectorAll(".form__input"),e._submitBtn=e._popupForm.querySelector(".form__button"),e._submitBtnText=e._submitBtn.textContent,e}return e=u,(n=[{key:"_getInputValues",value:function(){var t=this;return this._formValues={},this._inputList.forEach((function(e){t._formValues[e.name]=e.value})),this._formValues}},{key:"setEventListeners",value:function(){var t=this;O(P(u.prototype),"setEventListeners",this).call(this),this._popupForm.addEventListener("submit",(function(e){e.preventDefault(),t._handleFormSubmit(t._getInputValues())}))}},{key:"close",value:function(){O(P(u.prototype),"close",this).call(this),this._popupForm.reset()}},{key:"loading",value:function(t){this._submitBtn.textContent=t?"Сохранение...":this._submitBtnText}}])&&j(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(k);function I(t){return I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},I(t)}function q(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==I(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==I(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===I(o)?o:String(o)),r)}var o}var R=function(){function t(e){var n=e.nameElement,r=e.jobElement,o=e.avatarElement;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._nameElement=n,this._jobElement=r,this._avatarElement=o}var e,n;return e=t,n=[{key:"getUserInfo",value:function(){return{name:this._nameElement.textContent,job:this._jobElement.textContent,avatar:this._avatarElement.src}}},{key:"setUserInfo",value:function(t){var e=t.name,n=t.job,r=t.avatar;this._nameElement.textContent=e,this._jobElement.textContent=n,this._avatarElement.textContent=r}}],n&&q(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function T(t){return T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},T(t)}function B(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==T(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==T(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===T(o)?o:String(o)),r)}var o}function x(){return x="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=D(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},x.apply(this,arguments)}function A(t,e){return A=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},A(t,e)}function D(t){return D=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},D(t)}var F=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&A(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=D(r);if(o){var n=D(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===T(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._popupImage=e._popup.querySelector(".popup__image"),e._popupTitle=e._popup.querySelector(".popup__figcaption"),e}return e=u,(n=[{key:"open",value:function(t,e){this._popupImage.src=e,this._popupTitle.textContent=t,this._popupImage.alt=t,x(D(u.prototype),"open",this).call(this)}}])&&B(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(k);function V(t){return V="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},V(t)}function U(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==V(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==V(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===V(o)?o:String(o)),r)}var o}function N(){return N="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=z(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},N.apply(this,arguments)}function M(t,e){return M=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},M(t,e)}function z(t){return z=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},z(t)}var $=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&M(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=z(r);if(o){var n=z(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===V(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e,n=t.popupSelector;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,n))._form=e._popup.querySelector(".popup__form"),e}return e=u,(n=[{key:"submitCallback",value:function(t){this._handleSubmit=t}},{key:"setEventListeners",value:function(){var t=this;N(z(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("click",(function(e){e.preventDefault(),t._handleSubmit()}))}}])&&U(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(k);function G(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var H,J=new Api({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-74",headers:{authorization:"9cae5362-8d39-4179-9c56-a7f18d5e8ca0","Content-Type":"application/json"}});Promise.all([J.getInitialCards(),J.getUserInfo()]).then((function(t){var e,n,r=(n=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i,u,l=[],a=!0,c=!1;try{if(i=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;a=!1}else for(;!(a=(r=i.call(n)).done)&&(l.push(r.value),l.length!==e);a=!0);}catch(t){c=!0,o=t}finally{try{if(!a&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(c)throw o}}return l}}(e,n)||function(t,e){if(t){if("string"==typeof t)return G(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?G(t,e):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];Y.setUserInfo(i),H=i._id,cardsList.renderItems(o)})).catch((function(t){console.log("Ошибка: ".concat(t))}));var K=new S(f,e);K.enableValidation();var Q=new S(f,l);Q.enableValidation();var W=new S(f,a);W.enableValidation();var X=new F(".popup_type_img-card");X.setEventListeners();var Y=new R({nameElement:o,jobElement:i,avatar:s}),Z=function(t){var e=new h({data:t,cardSelector:".element-template",userId:H,handleCardClick:function(t,e){X.open(t,e)},handleDeleteIconClick:function(t){ot.open(),ot.submitCallback((function(){J.deleteCard(t).then((function(){ot.close(),e.deleteCard()})).catch((function(t){console.log("Ошибка: ".concat(t))}))}))},handleSetLike:function(t){J.setLike(t).then((function(t){e.handleLikeCard(t)})).catch((function(t){console.log("Ошибка: ".concat(t))}))},handleRemoveLike:function(t){J.deleteLike(t).then((function(t){e.handleLikeCard(t)})).catch((function(t){console.log("Ошибка: ".concat(t))}))}});return e.generateCard()},tt=new m({renderer:function(t){tt.addItem(Z(t))}},".elements");tt.renderItems();var et=new L({popupSelector:".popup_type_edit-card",handleFormSubmit:function(t){et.loading(!0),J.editUserInfo(t).then((function(t){Y.setUserInfo(t),et.close()})).catch((function(t){console.log("Ошибка: ".concat(t))})).finally((function(){et.loading(!1)}))}});et.setEventListeners(),profileEditBtn.addEventListener("click",(function(){var t,e,o,i=Y.getUserInfo();e=(t={username:i.name,job:i.job}).name,o=t.job,n.value=e,r.value=o,et.open(),K.toggleButtonState()}));var nt=new L({popupSelector:".popup_type_edit-avatar",handleFormSubmit:function(t){nt.loading(!0),J.editAvatar(t).then((function(t){s.src=t.avatar,nt.close()})).catch((function(t){console.log("Ошибка: ".concat(t))})).finally((function(){nt.loading(!1)}))}});nt.setEventListeners(),c.addEventListener("click",(function(){W.toggleButtonState(),nt.open()}));var rt=new L({popupSelector:".popup_type_add-card",handleFormSubmit:function(t){rt.loading(!0),J.addCard(t).then((function(t){cardsList.addItem(Z(t)),rt.close()})).catch((function(t){console.log("Ошибка: ".concat(t))})).finally((function(){rt.loading(!1)}))}});rt.setEventListeners(),u.addEventListener("click",(function(){Q.toggleButtonState(),rt.open()}));var ot=new $({popupSelector:".popup_type_delete-card"});ot.setEventListeners()})();