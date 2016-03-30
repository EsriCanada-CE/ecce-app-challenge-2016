﻿define(
	 ({
		commonCore: {
			common: {
				add: "Добавить",
				edit: "Редактировать",
				save: "Сохранить",
				next: "Следующий",
				cancel: "Отмена",
				back: "Назад",
				apply: "Применить",
				close: "Закрыть",
				open: "Открыть",
				start: "Начало",
				loading: "Загрузка",
				disabledAdmin: "Функция была отключена администратором",
				width: "Ширина",
				height: "Высота",
				create: "Создать",
				yes: "Да",
				no: "Нет",
				mystories: "Мои истории"
			},
			inlineFieldEdit: {
				editMe: "Отредактируйте меня!"
			},
			builderPanel: {
				panelHeader: "%TPL_NAME% Конструктор",
				buttonSaving: "Сохранение",
				buttonSaved: "Сохранено",
				buttonShare: "Опубликовать",
				buttonSettings: "Настройки",
				buttonHelp: "Справка",
				buttonPreview: "Просмотр истории",
				tooltipFirstSave: "Недоступно, пока приложение не будет сохранено.",
				tooltipNotShared: "Недоступно, пока приложение не будет опубликовано.",
				tooltipNotShared2: "История не опубликована в общий доступ и доступна только для вас.",
				noPendingChange: "Нет предполагаемых изменений",
				unSavedChangePlural: "Ожидание изменений",
				closeWithPendingChange: "Вы действительно хотите подтвердить это действие? Все изменения будут потеряны.",
				saveError: "Сохранение не удалось, попробуйте еще раз",
				status1: "История опубликована, но есть ограничения",
				status2: "История не опубликована, но есть ограничения",
				status3: "История общедоступна",
				status4: "Доступ к истории предоставлен в пределах организации.",
				status5: "История доступна только для вас",
				status6: "История пока не сохранена",
				checking: "Проверка...",
				fix: "Исправить"
			},
			saveError: {
				title: "Ошибка при сохранении истории",
				err1Div1: "Эта история не может быть сохранена, так как у вас уже есть элемент с тем же именем.",
				err1Div2: "Измените заголовок истории, затем сохраните ее.",
				btnOk: "Изменить заголовок истории"
			},
			saveErrorSocial: {
				title: "Обновление общего доступа через социальные сети",
				panel1: "Отображение вашей истории в социальных сетях улучшилось, но название элемента вашего веб-приложения ArcGIS не совпадает с заголовком истории.",
				panel1tooltip: "Если указать название, краткую информацию и образец изображения, ваша история будет выглядеть приблизительно так:",
				panel2:	"Какое название вы хотите использовать в социальных сетях:",
				panel2q1: "Заголовок истории (рекомендуется)",
				panel2q1tooltip: "Если выбрать эту опцию, заголовок элемента будет изменён соответственно заголовку истории, а дельнейшие изменения в конструкторе будут синхронизированы.",
				panel2q2: "Название элемента",
				panel3: "Для дальнейшего улучшения отображения своей истории в социальных сетях используйте ${MYSTORIES}, чтобы добавить краткую информацию и изображение образца.",
				panel4: "Больше не уведомлять меня об этой истории"
			},
			share: {
				shareTitle: "Откройте доступ к истории",
				preview: "Предварительный просмотр",
				viewlive: "Просмотр истории",
				btnPrivate: "Частный",
				btnPrivateTooltip: "Только вы видите историю.",
				btnOrg: "Организация",
				btnOrgTooltip: "Только участники организации могут просмотреть историю.",
				btnPublic: "Общий",
				btnPublicTooltip: "Историю может просмотреть кто угодно",
				loadingMessage: "Проверка истории на наличие ошибок...",
				viewToggle1: "Показать ресурсы истории",
				viewToggle2: "Закрыть ресурсы истории",
				socialize: "Открытие доступа",
				statusPrivate: "История является частной и доступна только для вас.",
				statusError: "Эти ограничения в ресурсах истории могут заметить ваши читатели. Вы можете выявить и исправить их.",
				statusNoErrPrivate: "Откройте доступ к истории, когда все будет готово!",
				mystoriesinvite: "Управление историями",
				notavailable1: "Извините, публикация истории из Конструктора не поддерживается, т.к. приложение не размещено в %PRODUCT%.",
				notavailable2: "Извините, публикация истории из Конструктора не поддерживается в данной версии Portal for ArcGIS (необходима версия 10.4 и выше).",
				notavailable3: "Вы можете опубликовать эту историю из %LINK%.",
				notavailable4: "Мои истории",
				notavailable5: "страница элемента",
				notavailable6: "Извините, этот объект не поддерживается в режиме разработки полностью. Он может поддерживаться в зависимости от выбранного варианта разворачивания.",
				notavailable7: "Посмотрите в %MYCONTENT%, что карты и слои, которые используются в истории, также доступны.",
				notavailable8: "Моих ресурсов",
				mystoriesinvite2: "Для дальнейшего улучшения отображения своей истории в социальных сетях используйте ${MYSTORIES}, чтобы добавить краткую информацию и изображение образца."
			},
			settings: {
				header: "Настройки",
				tabError: "Проверьте все закладки на наличие ошибок"
			},
			settingsLayout: {
				title: "Компоновка",
				explain: "Какой формат вы хотите использовать?",
				explainInit: "Вы можете изменить формат в любое время в диалоговом окне настроек.",
				viewExample: "Посмотреть пример из жизни"
			},
			settingsTheme: {
				title: "Тема"
			},
			settingsHeader: {
				title: "Заголовок",
				logoEsri: "Логотип Esri",
				logoNone: "Без логотипа",
				logoCustom: "Собственный логотип",
				logoCustomPlaceholder: "URL-адрес (макс 250 x 50 пикселов)",
				logoCustomTargetPlaceholder: "Переход по ссылке",
				logoSocialExplain: "Настройте ссылку заголовка.",
				logoSocialText: "Текст",
				logoSocialLink: "Ссылка",
				lblSmallHeader: "Использовать компактный заголовок (без подзаголовка)"
			},
			header: {
				title: "Отредактируйте заголовок вашего %TPL_NAME%",
				subtitle: "Отредактируйте подзаголовок вашего %TPL_NAME%"
			}
		}
	})
);