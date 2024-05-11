// 1813 - Sentence Similarity III

function areSentencesSimilar(sentence1, sentence2) {
    sentence1 = sentence1.split(' ');
    sentence2 = sentence2.split(' ');
    if (sentence1.length > sentence2.length) {
        const temp = sentence1;
        sentence1 = sentence2;
        sentence2 = temp;
    }
    let l1 = 0, r1 = sentence1.length - 1;
    let l2 = 0, r2 = sentence2.length - 1;
    while (l1 <= r1) {
        if (sentence1[l1] === sentence2[l2]) l1++, l2++;
        else if (sentence1[r1] === sentence2[r2]) r1--, r2--;
        else return false;
    }
    return true;
}
