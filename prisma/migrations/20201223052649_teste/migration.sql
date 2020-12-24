-- CreateTable
CREATE TABLE `Word` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `word` VARCHAR(191) NOT NULL,
    `means` VARCHAR(191) NOT NULL,
    `translate` VARCHAR(191) NOT NULL,
UNIQUE INDEX `Word.word_unique`(`word`),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
