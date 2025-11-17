## প্রশ্ন ও উত্তর

### What are some differences between interfaces and types in TypeScript?

উত্তর: 
type সব ধরনের ডাটা—প্রিমিটিভ (যেমন number, string, boolean) এবং নন-প্রিমিটিভ (যেমন object, array, function ইত্যাদি)—ডিফাইন করতে ব্যবহার করা যায়।

interface সাধারণত object বা object-এর মতো structure (যেমন array-এর ভিতরে object) ডিফাইন করতে ব্যবহার করা হয়।

### What is the use of the keyof keyword in TypeScript? Provide an example.

উত্তর:
keyof এর ব্যবহার
keyof কোনো অবজেক্টের key বা property-গুলোর টাইপ বের করতে ব্যবহার করা হয়।
let prop = keyof { name: "Ranajit"; id: 321 }
এখন prop এর মাধ্যমে এই অবজেক্টের সব key (যেমন "name" এবং "id") পাওয়া যাবে।


### Explain the difference between any, unknown, and never types in TypeScript.

উত্তর:

any টাইপ =>
any টাইপে যেকোনো ধরনের ডাটা—প্রিমিটিভ বা নন-প্রিমিটিভ—গ্রহণ করা যায়।
অর্থাৎ: টাইপ চেকিং হয় না।

unknown টাইপ =>
unknown টাইপও any-এর মতো যেকোনো ধরনের ডাটা গ্রহণ করতে পারে।
কিন্তু গুরুত্বপূর্ণ বিষয় হলো:
কোনো অপারেশন করার আগে টাইপ চেক করতে হয়, তাই এটি টাইপ সেফটি দেয়।

never টাইপ =>
never টাইপ — এটি কোনো টাইপ বা কাস্টম টাইপ কখনোই গ্রহণ করে না।

### Provide an example of using union and intersection types in TypeScript.

উত্তর:

Union টাইপ =>
union টাইপ ব্যবহার করা হয় একাধিক ডাটাটাইপ চেক করার জন্য এবং এগুলো একসাথে ব্যবহার করার জন্য।
