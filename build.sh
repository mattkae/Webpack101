DIRECTORIES=(Lesson1 Lesson2 Lesson3 Lesson4 Lesson5 Lesson6 Lesson7)
for dir in "${DIRECTORIES[@]}"; do
    cd $dir
    npm ci
    npm run build
    cd ../
done