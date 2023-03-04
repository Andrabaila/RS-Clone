const english: { readonly [x: string]: string } = {
    language: 'ENGLISH',

    githubLinkFirstTeammate: 'Yury Andrabaila',
    githubLinkSecondTeammate: 'Alexandr Rylkov',
    githubLinkThirdTeammate: 'Pavel Poleshchuk',
    applicationCreationYear: '2023',

    startPageTitle: "Let's go!",
    startPageText: 'Do you want to create a new group ar join an existing one?',
    startPageButtonNew: 'New group',
    startPageButtonJoin: 'Join group',

    headerLeftButton: 'Overview',
    headerRightButton: 'Expenses',
    burgerTop: 'Groups',
    burgerFeedback: 'Feedback',
    burgerAbout: 'About',
    dottedTotal: 'Instruction',
    dottedAdd: 'Add group photo',
    dottedChangeName: 'Change name',
    dottedChangeCurrency: 'Change currency',
    dottedLeaveGroup: 'Leave group',
    penButton: 'Done',

    cancelButton: 'Cancel',
    leaveButton: 'Leave',
    leaveGroupButton: 'Leave Group?',

    newGroupButton: 'New group',
    choiceGroupButton: 'Choice group',
    makeChoiceButton: 'Make choice',

    buttonCreate: 'CREATE',
    placeholderNewGroup: 'Name',
    buttonCurrency: 'Currency',
    currency: 'BYN',
    addGroupTitle: 'Enter a group name',
    errorMessageAddGroup: 'Error with add group fetch request!',

    buttonJoin: 'JOIN',
    placeholderJoinGroup: 'code',
    joinPageText: 'Enter a code',

    buttonInvite: 'INVITE',
    buttonCopy: 'COPY',
    buttonLater: 'LATER',

    inviteText: 'Others can access your group using this code',
    confirmingMessage: 'Code successfully copied to clipboard',

    btnEdit: 'EDIT',
    btnDone: 'DONE',
    balance: 'Balance',
    expenses: 'Expenses',
    payments: 'Payments',
    benefitsFrom: 'Benefits from',
    deletePerson: 'Delete',
    btnCancel: 'Cancel',
    btnDelete: 'Delete',
    joinGroup: 'Join group',
    checkText: 'Are you sure?',

    buttonAdd: '+',
    popupTitleNewExpense: 'New expense',
    popupTitleNewPayment: 'New payment',
    popupTextNewExpense: 'A purchase made for the group',
    popupTextNewPayment: 'A payment within the group',
    buttonNewExpense: '⚖',
    buttonNewPayment: '→',

    buttonSave: 'SAVE',
    textAmount: 'Amount',
    textCurrency: 'Currency',
    textFrom: 'From',
    textTo: 'To',
    textDate: 'Date',
    buttonMore: 'More',
    buttonLess: 'Less',

    amount: 'Amount',
    currencies: 'Currency',
    titleExpense: 'Title',
    by: 'By',
    forWhom: 'For',
    from: 'From',
    to: 'To',
    date: 'Date',
    persons: 'persons',
    payment: 'Payment',

    noGroupMessage: 'Sorry, there is no group with id ',

    createUserGreeting: 'Introduce yourself',
    createUserButton: 'Log in',
    errorMessageAddNewUser: 'Server is not available',

    buttonBack: 'Back',
    instructionText: `The application is intended for mutual settlements within a group of people.<br><br>
    Instruction: <br><br>
    1. When you first enter the site, the application asks for your name. It will also be displayed in all groups in which you will be a member.<br><br>
    2. After that, a page will open where you will have the choice to join an existing group or create a new one. <br>
    --When creating a new group, you will need to specify the name of the group and the currency in which further calculations will be made within the group. <br>
    --When joining a group, you must specify an id that you must provide another user who is already inside the group. <br><br>
    3. After adding to the group, the main page of the application will open. On it are located<br>
    --User menu, which shows a list of user groups and when you click on the name of a particular group, you go to it. Also, when you click on the "+", a page opens where you can create a new one or join an existing group. <br>
    --Overview page. It contains a list of users with their current balance. There is an "Invite" button, when clicked, a window with the group id will open, it is it that must be provided to another user so that he can be added to this group. <br>
    --Expenses page. It contains a list of all the group's purchases. Clicking on a purchase will open more detailed information about it. <br><br>
    4. There is also a "+" button on the "Overview" page. When clicked, a menu will open where you can add a new purchase. <br>
    --"Add expense". It is necessary in case when the user buys something for the whole group. When clicked, a page for adding a purchase opens in which you must specify the name of the purchase, its cost and select who makes the purchase. After clicking on the "Save" button, the purchase is saved and the user's balance is recalculated. The user who made the purchase is added a number equal to the amount owed to the user by other users. <br>
    --"Add payment". Required when a purchase is made for a single user in a group. When clicked, a page for adding a purchase opens in which you must specify the cost of the purchase, choose who makes the purchase and for whom. After clicking on the "Save" button, the purchase is saved and the user's balance is recalculated. The user who made the purchase is added a number equal to half the cost of the purchase, the user who must deduct this amount accordingly. <br><br>
    We sincerely apologize, but, unfortunately, the application, for some reason, is not yet completed and continues to be developed. <br>`,

    toValue: 'everyone',
};

export default english;
