"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[897],{4897:function(e){e.exports=JSON.parse('[{"title":"Bases en probabilit\xe9s pour du Machine learning","description":"Mes notes sur les diff\xe9rents sujets de probabilit\xe9s utils pour faire du Machine learning (Variables al\xe9atoire,  Fonctions de distribution, Cha\xeene de Markov)","tags":["Probabilities","Machine learning"],"thumbnail":"https://github.com/Arksyd96/ocr-license-plates-crnn/blob/master/text-from-image-ocr.ipynb","id":"mes_notes_en_probabilites","body":{"cells":[{"cell_type":"markdown","metadata":{},"source":["(R\xe9f\xe9rence des formules: Bibm@th)\\n","# **Les variables al\xe9atoires** \\n","## **1. Variables al\xe9atoires discr\xe8tes :**\\n","Une variable al\xe9atoire discr\xe8te est une application $X$ de $\\\\Omega$ (Univers, contenant toutes les possibilit\xe9s) dans $E$ tel que $X(\\\\Omega)$ soit fini ou d\xe9nombrable.\\n","- Notons : $X(\\\\Omega) = \\\\{x_n; n \\\\in I\\\\}$ o\xf9 $I$ est fini ou d\xe9nombrable.\\n","- La loi de probabilit\xe9 de $X$, soit $(P_n)_{n \\\\; \\\\in \\\\; I}$, est not\xe9 : $P_n =P(X=x_n)$.\\n","\\n","**Note**: Un ensemble d\xe9nombrable est un ensemble en bijection avec l\'ensemble des entiers $\\\\mathbb{N}$ (\xe9quipotent).\\n","\\n","- La probabilit\xe9 $P(y|x)$ est la probabilit\xe9 conditionnelle de $y$ sachant $x$ (Probabilit\xe9 d\'un \xe9venement sachant qu\'un autre \xe9venement a eu lieu), et est d\xe9finit comme suit :\\n","$$ P(Y = y|X = x) = \\\\frac{P(X = x, Y = y)}{P(X = x)}$$\\n","o\xf9 $P(X = x, Y = y)$ est l\'application de la **loi conjointe** sur les variables $X$ et $Y$. \\n","- La loi conjointe entre deux variables $X$ et $Y$ est la loi qui d\xe9finit toutes les probabilit\xe9s du vecteur $(X, Y)$ dans un ensemble $\\\\mathbb{E}^2$, en d\'autres termes, la probabilit\xe9 de l\'apparition de $X$ et $Y$ en m\xeame temps $P((X = x) \\\\cap (Y = y))$ (\xe0 ne pas confondre avec la probabilit\xe9 conditionnelle) :\\n","$$ P_{X,Y}(I \\\\times J) = P(X \\\\in I \\\\; \\\\; et \\\\; \\\\; Y \\\\in J) $$  \\n","***Exemple***: Soit $E$ un \xe9venement o\xf9 on tire 2 valeurs dans l\'univers $\\\\{-1, 1\\\\}^2$. $X$ est la somme des deux valeurs et $Y$ leur produit. On aura alors $X \\\\in \\\\{-2, 0, 2\\\\}$ et $Y \\\\in \\\\{-1, 1\\\\}$. Voici les valeurs possible de la loi conjointe entre $X$ et $Y$ :\\n","$$ P(X = -2, Y = -1) = 0, \\\\;\\\\;\\\\;\\\\; P(X = 0, Y = -1) = \\\\frac{1}{2}$$\\n","$$ P(X = 2, Y = -1) = 0, \\\\;\\\\;\\\\;\\\\; P(X = -2, Y = 1) = \\\\frac{1}{4}$$\\n","$$ P(X = 0, Y = 1) = 0, \\\\;\\\\;\\\\;\\\\; P(X = 2, Y = 1) = \\\\frac{1}{4}$$  \\n","**Note**: faites attention \xe0 l\'ordre des variables dans la loi conjointe.  \\n","**Note**: Si $P(X = x, Y = y)$ est appell\xe9 loi conjointe, alors $P(X = x), P(Y = y)$ sont appell\xe9es **lois marginales**.  \\n","- Il possible de retrouver les lois marginales \xe0 partir de la loi conjointe en fixant la valeur d\'une variable $X \\\\in \\\\{x_1, ..., x_p\\\\}$ ou $Y \\\\in \\\\{y_1, ..., y_q\\\\}$:\\n","$$ P(X = x_i) = \\\\sum_{j=1}^q P(X = x_i, Y = y_j) \\\\;\\\\; et \\\\;\\\\; P(Y = y_j) = \\\\sum_{i=1}^p P(X = x_i, Y = y_j)$$ \\n","- Cependant l\'inverse n\'est pas toujours correcte, il est possible de trouver la loi conjointe entre deux variables seulement si ces d\xe9rni\xe8res sont ind\xe9pendentes, et dans ce cas l\xe0 on aura :\\n","$$ P(X = x, Y = y) = P(X=x)P(Y=y)$$  \\n","Si les deux variables ne sont pas ind\xe9pentes alors il faudra plus d\'informations sur le rapport entre $X$ et $Y$ :\\n","$$ P(X = x, Y= y) = P(X = x)P(Y = y | X = x) \\\\;\\\\; (origine \\\\;\\\\; de \\\\;\\\\; la \\\\;\\\\; loi \\\\;\\\\; conditionnelle)$$\\n","\\n","**I. Esp\xe9rence d\'une variable al\xe9atoire discr\xe8te:** not\xe9e $\\\\mathbb{E}[X]$, est la valeur moyenne qu\'on s\'attend \xe0 trouver pour la variable al\xe9atoire $X$. La formule de l\'esp\xe9rence est d\xe9finit comme suit :\\n","$$ \\\\mathbb{E}(X) = \\\\sum_{n \\\\in I} x_n P(X = x_n)$$\\n","**II. Variance d\'une variable al\xe9atoire discr\xe8te:** not\xe9e $V[X]$, la mesure de dispersion des valeurs de $X$. Elle est d\xe9finit comme suit :\\n","$$ V[X] = \\\\mathbb{E}[(X - \\\\mathbb{E}[X])^2] = \\\\mathbb{E}[X^2] - \\\\mathbb{E}[X]^2$$\\n","- *D\xe9monstration* de $V[X] \\\\Longrightarrow$ :  \\n","$= \\\\mathbb{E}[(X - \\\\mathbb{E}[X])^2] = \\\\mathbb{E}[X^2 - 2X\\\\mathbb{E}[X] + \\\\mathbb{E}[X]^2]$  \\n","$= \\\\mathbb{E}[X^2] - 2\\\\mathbb{E}[X]\\\\mathbb{E}[X] + \\\\mathbb{E}[X]^2 = \\\\mathbb{E}[X^2] - 2\\\\mathbb{E}[X]^2 + \\\\mathbb{E}[X]^2$  \\n","$= \\\\mathbb{E}[X^2] - \\\\mathbb{E}[X]^2$   \\n","**Note** $\\\\mathbb{E}[\\\\mathbb{E}[X]] = \\\\mathbb{E}[X]$  \\n","\\n","## **2. Variables al\xe9atoires continue (Variables \xe0 densit\xe9):**\\n","Une variable al\xe9atoire continue est une fonction $X$ de $\\\\Omega$ dans $\\\\mathbb{R}$ $(X:\\\\Omega \\\\rightarrow \\\\mathbb{R})$ telle qu\'il existe $f: \\\\mathbb{R} \\\\rightarrow \\\\mathbb{R}$ continue par morceaux et v\xe9rifiant :\\n","$$ \\\\forall a < b : P(X \\\\in [a, b]) = \\\\int_a^b f(x)dx$$\\n","- Si une telle fonction existe, elle est alors appell\xe9 densit\xe9 de la variable al\xe9atoire $X$. Cette fonction doit n\xe9c\xe9ssairement \xeatre positive et v\xe9rifie $\\\\int_{- \\\\infty}^{+ \\\\infty} f(x)dx = 1$ (l\'air de la fonction $f$ correspond \xe0 une probabilit\xe9, et la somme des probabilit\xe9s de tout les \xe9venements $x_n$ dans $\\\\mathbb{R}$ doit \xeatre \xe9gale \xe0 1).\\n","- On pose alors la loi suivante :\\n","$$ f(x) = \\\\frac{dF(x)}{dx} $$\\n","o\xf9 $F(x)$ est la fonction de r\xe9partition de la variable. \\n","- Toutes variables continue est d\xe9finit par une certaine fonction de r\xe9partition, et en int\xe9grant cette d\xe9rin\xe8re on obtient la fonction de densit\xe9.\\n","\\n","**1. Esp\xe9rence d\'une variable al\xe9atoire continue**: de la m\xeame mani\xe8re que pour les variables discr\xe8tes, sauf qu\'on utilise une int\xe9grale \xe9tant donn\xe9 la continuit\xe9 de la fonction :\\n","$$ \\\\mathbb{E}[X] = \\\\int_{-\\\\infty}^{+\\\\infty} xf(x)dx $$\\n","**2. Variance d\'une variable al\xe9atoire continue** m\xeame formule : $ V[X] = \\\\mathbb{E}[X^2] - \\\\mathbb{E}[X]^2$\\n","\\n","## **3. Fonctions de r\xe9partition les plus connues :**\\n","### **1. Loi g\xe9om\xe9trique :**\\n","Une variable al\xe9atoire discr\xe8te $X$ suit une loi g\xe9om\xe9trique de param\xe8tres $p$, qu\'on note $X \\\\sim \\\\mathcal{G}(p)$ si :\\n","- $X(\\\\Omega) = \\\\mathbb{N}^{*}$\\n","- $P(X = k) = p(1 - p)^{k - 1} = pq^{k - 1}$  \\n","\\n","$X$ admet alors une esp\xe9rence et une variance :\\n","- $\\\\mathbb{E}[X] = \\\\frac{1}{p}$  \\n","- $V[X] = \\\\frac{q}{p^2} = \\\\frac{1 - p}{p^2}$ \\n","\\n","**Exemple**: Lancer de pi\xe8ce de monnaie truqu\xe9e avec les probabilit\xe9s $P(pile) = p$ et $P(face) = 1 - p = q$. soit $X$ le nombre de lancers pour obtenir pile pour la premi\xe8re fois, $X$ suit alors une loi g\xe9om\xe9trique. Dans cet exemple, le param\xe8tre $k$ est le nombre de lancers total.  \\n","Pour $k = 5$ (5 lancers), la probabilit\xe9 d\'avoir pile pour la premi\xe8re fois est $pqqqq = pq^4$. L\'esp\xe9rence dans ce cas et la probabilit\xe9 moyenne d\'avoir pile, avec $k = 5$ on obtient $\\\\mathbb{E}[X = 5] = \\\\frac{1}{5} = 20\\\\%$ de chances.\\n","\\n","### **2. Loi de Poisson :**\\n","Soit $\\\\lambda > 0$. Une variable al\xe9atoir discr\xe8te $X$ suit une loi de Poisson de param\xe8tre $\\\\lambda$ et not\xe9 $X \\\\sim \\\\mathcal{P}(\\\\lambda)$ si :\\n","- $X(\\\\Omega) = \\\\mathbb{N}$\\n","- $P(X = k) = e^{-\\\\lambda}\\\\frac{\\\\lambda^{k}}{k!}$\\n","\\n","$X$ admet alors une esp\xe9rence et une variance :\\n","- $\\\\mathbb{E}[X] = \\\\lambda$\\n","- $V[X] = \\\\lambda$\\n","\\n","*Note* la loi de Poisson est la loi des ph\xe9nom\xe8nes rares et des petites probabilit\xe9s, g\xe9n\xe9ralement utiliser pour mod\xe9liser des syst\xe8mes de file d\'attente. Pour plus d\'informations, consulter ce [lien](https://fr.wikipedia.org/wiki/Loi_de_Poisson).\\n","\\n","### **3.Loi exponentielle :**\\n","$X$ est une variable al\xe9atoire continue suivant la loi exponentielle de param\xe8tre $a > 0$, note $X \\\\sim \\\\mathcal{e}(a)$ si elle est absolument continue et admet pour densit\xe9 :\\n","- $f(x) = x =\\\\begin{cases}ae^{-ax} & si \\\\;\\\\; x > 0\\\\\\\\0 & sinon\\\\end{cases}$  \\n","\\n","$X$ admet une esp\xe9rence et une variance :\\n","- $\\\\mathbb{E}[X] = \\\\frac{1}{a}$\\n","- $V[X] = \\\\frac{1}{a^2}$\\n","\\n","*Note* la loi exponentielle est la version continue de la loi g\xe9om\xe9trique; Sert souvent \xe0 mod\xe9liser la dur\xe9e de vie d\'une entit\xe9. $X$ dans ce cas l\xe0 est une variable continue sans m\xe9moire, et elle v\xe9rifie donc :$\\\\forall x, y \\\\geq 0$ : $P(X \\\\geq x+y |X \\\\geq y) = P(X \\\\geq x)$ (car on traite g\xe9n\xe9ralement des p\xe9riodes de temps avec la loi exponentielle).  \\n","\\n","La r\xe9partition de $X$ est : $F(t) = \\\\begin{cases}0 & si \\\\;\\\\; t \\\\leq 0\\\\\\\\ 1 - e^{-at} & sinon \\\\end{cases}$  \\n","Je note bien $t$ et non pas $x$ car l\'unit\xe9 est le temps.\\n","\\n","### **4. Loi uniforme :**\\n","$X$ est une variable al\xe9atoire continue r\xe9partit de mani\xe8re uniforme sur un ensemble $[a, b]$, not\xe9 $X \\\\sim \\\\mathcal{U}(a, b)$ si elle admet comme fonction de densit\xe9 :\\n","- $f(x) = \\\\begin{cases} \\\\frac{1}{b - a} & x \\\\in [a, b]\\\\\\\\0 & sinon \\\\end{cases}$  \\n","\\n","et la fonction de r\xe9partition de $X$ est alors :\\n","- $F(x) = \\\\begin{cases} 0 & si \\\\;\\\\; t \\\\leq x \\\\\\\\ \\\\frac{x - a}{b - a} & si \\\\;\\\\; x \\\\in [a, b] \\\\\\\\ 1 & sinon\\\\end{cases}$\\n","\\n","On donne aussi : $\\\\mathbb{E}[X] = \\\\frac{a+b}{2}$ et $V[X] = \\\\frac{(b-a)^2}{12}$.\\n","\\n","### **5. Loi normale (ou Gaussienne) :** (Important pour le machine learning :D)\\n","$X$ est une variable al\xe9atoire continue dont la r\xe9parition est normale (ou Gaussienne) avec les param\xe8tres $m$ (esp\xe9rence) et $\\\\sigma^2$ (variance), et que l\'on note $X \\\\sim \\\\mathcal{N}(m, \\\\sigma^2)$, si elle est continue et a pour densit\xe9 :\\n","- $f(x) = \\\\frac{1}{\\\\sigma \\\\sqrt{2 \\\\pi}}exp(-\\\\frac{(x - m)^2}{2\\\\sigma^2})$\\n","\\n","On aura alors $\\\\mathbb{E}(X) = m$ et $V[X] = \\\\sigma^2$\\n","\\n","# **Connaissance transversales en probabilit\xe9s :**\\n","## **1. Syst\xe8me d\'\xe9v\xe9nement complet :**\\n","Soit $(\\\\Omega, A, P)$ un espace probabiliste. Un syst\xe8me complet d\'\xe9v\xe9nement est un syst\xe8mes o\xf9 tout les \xe9v\xe9nements r\xe9unis forment $\\\\Omega$. donc :\\n","- $i \\\\neq j \\\\Longrightarrow A_i \\\\cup A_j = \\\\emptyset$;   (\xe9v\xe9nemenents ind\xe9pendants).\\n","- $\\\\bigcup_{i \\\\in I} A_i = \\\\Omega$\\n","\\n","On parle aussi de syst\xe8me quasi-complet quand la deuxi\xe8me condition est remplac\xe9e par $\\\\sum_{i \\\\in I} P(A_i) = 1$.\\n","\\n","## **2. Exp\xe9rience ou sch\xe9ma de Bernoulli :**\\n","Une exp\xe9rience de Bernoulli n\'a que deux issues possibles, succ\xe8s ($s$) ou \xe9chec ($\\\\overline{s}$).\\n","Le succ\xe8s est d\xe9finit par une probabilit\xe9 $p$ et l\'\xe9chec par une probabilit\xe9 $q = 1 - p$.\\n","Le param\xe8tre de l\'exp\xe9rience est $p$, la probabilit\xe9 d\'un succ\xe8s.  \\n","**Exemple**: Pour un lancer de d\xe9, la probabilit\xe9 d\'avoir un 6, \xe9tant le succ\xe8s, est d\xe9finit par $p = \\\\frac{1}{6}$.  \\n","$X$ est une variable al\xe9atoire qui est d\xe9finit par $X=1$ en cas de r\xe9ussite et $X=0$ en cas d\'\xe9chec. $X$ suit alors une loi de Bernoulli de param\xe8tre $p$ note $X \\\\sim \\\\mathcal{B}(p)$.  \\n","$X$ admet une esp\xe9rence et une variance :\\n","- $\\\\mathbb{E}[X] = 1 \\\\times p + 0 \\\\times (1 - p) = p$\\n","- $V[X] = p(1-p)$\\n","\\n","## **3. Loi binomiale :**\\n","On consid\xe8re une exp\xe9rience al\xe9atoire qui ne poss\xe8de que deux r\xe9sultats : succ\xe8s ($s$), \xe9chec ($\\\\overline{s}$). On pose :\\n","- $p = P(s)$\\n","- $q = P(\\\\overline{s}) = 1 - p$  \\n","\\n","On r\xe9p\xe8te $n$ fois cette exp\xe9rience, et on suppose que les r\xe9p\xe9titions sont ind\xe9pendentes. On pose $X$ une variable al\xe9atoire qui repr\xe9sente le nombre de succ\xe8s au cours des $n$ r\xe9p\xe9titions, on dit alors que $X$ suit une loi binomiale de param\xe8tre $n$ et $p$.  \\n","La probabilit\xe9 d\'obtenir $k$ succ\xe8s au cours de $n$ r\xe9p\xe9titions est not\xe9 :\\n","$$P(X = k) = C^n_k \\\\times p^k(1 - p)^{n-k}$$  \\n","\\n","O\xf9 $C^n_k$, dit, $k$ parmis $n$, est le nombre de combinaisons de $k$ \xe9lements choisis parmi $n$.\\n","$C$ est le coefficient binomial et est \xe9gale au nombre de chemins conduisant \xe0 strictement $k$ succ\xe8s dans l\'arbre repr\xe9sentant le sch\xe9ma de Bernoulli. Plus formellement $C$ est d\xe9finit comme suit :\\n","$$C_k^n = \\\\frac{n!}{k!(n - k)!}$$\\n","\\n","*Note* Une exp\xe9rience de Bernoulli est une loi Binomiale avec nombre de r\xe9p\xe9tition $n = 1$. Une loi Binomiale est la r\xe9p\xe9tition de $n$ fois le sch\xe9ma de Bernoulli.\\n","\\n","#### Quelques propri\xe9t\xe9 du coefficient Binomial\\n","- $C_0^n = 1$, Nombre de chemin \xe0 0 succ\xe8s dans une suite de $n$ r\xe9p\xe9titions ? un seul chemin possible.\\n","- De la m\xeame mani\xe8re: $C_n^n = 1$.\\n","- $C_1^n = n$, un seul succ\xe8s sur $n$ r\xe9p\xe9titions: $n$ combinaisons possibles; $n=4 \\\\Longrightarrow (1000, 0100, 0010, 0001)$.\\n","- Pour $0 \\\\leq k \\\\leq n$: $C^n_{n-k} = C^n_k$.\\n","- Pour $0 \\\\leq k \\\\leq n$: $C^n_k + C^n_{k+1} = C^{n+1}_{k+1}$\\n","- En utilisant les r\xe9gles pr\xe9c\xe9dentes, on peut simplifier le calcul. **Exemple**\\n","    - $C^4_2 = C^{3 + 1}_{1 + 1} = C^3_1 + C^3_2 = 3 + C^2_1 + C^2_2 = 3 + 2 +1 = 6$\\n","\\n","## **4. Loi de Bayes :**\\n","Pour bien comprendre la loi de Bayes, il faut comprendre la notion de d\xe9pendance entre \xe9v\xe9nements. Soit $A$ et $B$ deux \xe9v\xe9nements :\\n","- Si $A$ et $B$ sont ind\xe9pendants, alors : \\n","    - $P(A \\\\cap B) = P(A)P(B) = P(B)P(A) = P(B \\\\cap A)$  \\n","    - $P(A | B) = \\\\frac{P(A \\\\cap B)}{P(B)} = \\\\frac{P(A)P(B)}{P(B)} = P(A)$\\n","- Si $A$ et $B$ sont d\xe9pendants, alors : \\n","    - $P(A \\\\cap B) = P(B)P(A|B) = P(A)P(B|A) = P(B \\\\cap A)$  \\n","\\n","$P(A \\\\cap B)$ est la probabilit\xe9 de l\'arriv\xe9e des \xe9v\xe9nements $A$ et $B$. Dans le cas d\'une d\xe9pendances entre ces d\xe9rniers, il faut alors prendre en consid\xe9ration l\'ordre d\'arriv\xe9. Si $A$ est arrive en premier, la probabilit\xe9 d\'avoir $B$ lorsque $A$ est pr\xe9sent est d\xe9finie par $P(B|A)$ ($B$ sachant $A$, et aussi not\xe9 $P_A(B)$). On aura donc $P(A \\\\cap B) = P(A) \\\\times P(B|A)$. Dans un deuxi\xe8me cas o\xf9 $B$ arrive en premier, on aura alors $P(B) \\\\times P(A|B)$.  \\n","Par inf\xe9rence, on a alors :\\n","$$A \\\\cap B = B \\\\cap A \\\\Longleftrightarrow P(A \\\\cap B) = P(B \\\\cap A) \\\\Longleftrightarrow P(B)P(A|B) = P(A)P(B|A)$$  \\n","Ce qui nous donne la loi de Bayes d\xe9finit par :\\n","$$ P(A|B) = \\\\frac{P(A)P(B|A)}{P(B)}$$  \\n","Il est \xe0 noter aussi que dans un syst\xe8me d\'\xe9v\xe9nements complet $(\\\\Omega, A, P)$ o\xf9 toutes les probabilit\xe9s $P_i$ des \xe9v\xe9nements $A_i$ sont non nulles. La loi de Bayes est d\xe9finit par :\\n","$$ B = B \\\\cap A_1 + B \\\\cap A_2 + ... + B \\\\cap A_n = \\\\sum_{i \\\\in A} B \\\\cap A_i$$\\n","$$ P(B) = \\\\sum_{n \\\\geq 1} P(A_n) \\\\times P(B | A_n)$$  \\n","Formule souvent utilis\xe9e quand le syst\xe8me est constitu\xe9 de $A$ et $\\\\overline{A}$ :\\n","$$ P(A|B) = \\\\frac{P(B|A)P(A)}{P(B|A)P(A) + P(B|\\\\overline{A})P(\\\\overline{A})} $$  \\n","*Note* Attention, on se permet d\'utiliser $\\\\overline{A}$ car on peut la d\xe9duire \xe9tant donn\xe9 que le syst\xe8me n\'est constitu\xe9 que des deux \xe9v\xe9nements contraires. Dans un syst\xe8mes avec plus d\'\xe9v\xe9nements, il faudra avoir plus d\'informations sur les autres \xe9v\xe9nements. De mani\xe8re plus g\xe9n\xe9rale on notera :\\n","$$ P(A_k|B) = \\\\frac{P(B|A_k)P(A_k)}{P(B)} = \\\\frac{P(B|A_k)P(A_k)}{\\\\sum_{i \\\\geq 1}^n P(A_i)P(B |A_i)} \\\\;\\\\; avec \\\\;\\\\; k \\\\neq i$$  \\n","\\n","**Exemple pour avoir une meilleure id\xe9e**: Posons deux \xe9v\xe9nements $A$ = \\"tomber malade\\" et $B$ = \\"\xeatre test\xe9 positif\\". La probabilit\xe9 de tomber malade ($A$ arrive en premier) puis \xeatre test\xe9 positif ($B$ arrive en second) est assez \xe9l\xe9v\xe9e, soit par exemple $90\\\\%$, si on suppose que le test est de bonne qualit\xe9. Cependant, la probabilit\xe9 d\'\xeatre test\xe9 positif ($B$ arrive en premier) puis de tomber malade ($A$ arrive en second) est assez basse, il est moins probable de tomber malade en ayant d\xe9j\xe0 \xe9t\xe9 test\xe9 positif.  \\n","Soit $P(A) = 30\\\\%$ et $P(B|A) = 90\\\\%$, en utilisant les formules pr\xe9c\xe9dentes, il est possible de calculer $P(A|B)$:\\n","- $P(B) = P(A)P(B|A) + P(\\\\overline{A})P(B|\\\\overline{A}) = 0,3 \\\\times 0,9 + 0,7 \\\\times 0,1 = 0,34$\\n","- $P(A|B) = \\\\frac{P(A)P(B|A)}{P(B)} = \\\\frac{0,3 \\\\times 0,9}{0,34} = 0,79$\\n","\\n","# **Processus stochastique**\\n","Un processus stochastique est une fonction du temps dont la valeur \xe0 chaque instant $t$ d\xe9pend de l\'issue d\'une exp\xe9rience al\xe9atoire.\\n","- Le temps peut \xeatre discret ou continu.\\n","- L\'ensemble $E$ est l\'ensemble des \xe9tats possibles que peut prendre la variable $X^{(t)}$.  \\n","## Vecteur et matrice stochastique :\\n","- Un vecteur $\\\\pi = (\\\\pi_0, \\\\pi_1, \\\\pi_2, ..., \\\\pi_n)$ est stochastique seulement si la somme des composantes est \xe9gale \xe0 1 : $\\\\sum_i^n \\\\pi_i = 1$.\\n","- Pareil pour une matrice, chaque ligne est un vecteur stochastique.  \\n","**Exemple**\\n","$$ \\\\pi = (\\\\frac{1}{4}, \\\\frac{1}{2}, \\\\frac{1}{4}); \\\\;\\\\;\\\\; P = \\n","\\\\begin{bmatrix}\\n","    \\\\frac{1}{2} & \\\\frac{1}{2} & \\\\frac{1}{4} & = 1\\\\\\\\ \\n","    \\\\frac{1}{3} & \\\\frac{1}{3} & \\\\frac{1}{3} & = 1\\\\\\\\\\n","    \\\\frac{1}{2} & 0 & \\\\frac{1}{2} & = 1\\\\\\\\ \\n","\\\\end{bmatrix}$$\\n","\\n","## Processus sans m\xe9moire (Processus Markovien) :\\n","Un processus Markovien est un processus ayant la propri\xe9t\xe9 de Markov. L\'\xe9volution du processus ne d\xe9pend que du pr\xe9sent, c-\xe0-dire qu\'\xe0 un instant $t+1$, on ne d\xe9pend que de l\'\xe9tat \xe0 l\'instant $t$ :\\n","$$ P[X_{n+1} = x_{n+1} | X_0=x_0; X_1=x_1; ...; X_n=x_n] = P[X_{n+1} = x_{x+1}|X_n=x_n]$$ \\n","\\n","# **Les cha\xeenes de Markov**\\n","## **1. Les cha\xeenes de Markov \xe0 temps discret :**\\n","$E$ est un espace d\'\xe9tats discrets, peut \xeatre fini ou d\xe9nombrable. ${X_n}_{n \\\\in E}$ est une variable al\xe9atoire qui mod\xe9lise une cha\xeene de Markov \xe0 temps discret (CMTD) seulement si :\\n","$$ P[X_n = j | X_{n - 1} = i_{n - 1}; X_{n - 2} = i_{n-2}; ...; X_0 = i_0] = P[X_j = j|X_{n - 1} = i_{n-1}]$$  \\n","$X$ repr\xe9sente un processus sans m\xe9moire.  \\n","### **Propri\xe9t\xe9s d\'une CMTD :**\\n","- On pose $P_{ij}$ la probabilit\xe9 de transiter vers l\'\xe9tat $j$ sachant qu\'\xe0 l\'instant $t-1$ on etait \xe0 l\'\xe9tat $i$.\\n","$$ P_{ij} = P[X_n = j | X_{n-1}=i]; \\\\;\\\\; \\\\forall n \\\\in \\\\mathbb{N}$$\\n","- On note aussi la somme des probabilit\xe9s d\'une transition d\'un \xe9tat $i$ vers $j$ est \xe9gale \xe0 1: $\\\\sum_{j \\\\in E} P_{ij} = 1$.\\n","- Il est possible de transiter vers le m\xeame \xe9tat : $P_{ii} \\\\geq 0$.  \\n","**Exemple**  \\n","$E = \\\\{1, 2, 3, 4\\\\}$; $P = [P_{ij}]; i,j \\\\in E$\\n","$$ P = \\\\begin{bmatrix}\\n","    0 & P_{12} & 0 & P_{14} & = 1 \\\\\\\\\\n","    0 & 0 & 1 & 0 & =1 \\\\\\\\\\n","    P_{31} & 0 & P_{33} & 0 & =1 \\\\\\\\\\n","    1 & 0 & 0 & 0 & = 1 \\n","\\\\end{bmatrix}$$  \\n","*Note* Peut \xeatre repr\xe9sent\xe9 sous la forme d\'un graphe pond\xe9r\xe9 o\xf9 les poids sont les probabilit\xe9s de transition.\\n","\\n","### **Distribution de l\'\xe9tat initial** :\\n","- L\'\xe9tat initial est d\xe9fini par le vecteur $\\\\pi^{(0)} = (\\\\pi^{(0)}_0, \\\\pi^{(0)}_1, \\\\pi^{(0)}_2, ..., \\\\pi^{(0)}_n)$ o\xf9 $\\\\pi^{(0)}_i = P[X_0 = i]$ (Probabilit\xe9 que la cha\xeene se trouve \xe0 l\'\xe9tat $i$ \xe0 l\'instant $0$).  \\n","- Si un syst\xe8me est initialement \xe0 l\'\xe9tat $j$ alors $\\\\pi^{(0)}_j = 1$ et $\\\\pi^{(0)}_i = 0$; $\\\\forall i \\\\neq j$.\\n","\\n","## **2. Analyse d\'une cha\xeene de Markov \xe0 temps discret** :\\n","### **R\xe9gime transitoire :**\\n","Afin de d\xe9terminer le vecteur $\\\\pi^{(n)}$ des probabilit\xe9s d\'\xe9tats \xe0 un instant $n$, on pose :\\n","- \xc9tat du vecteur $n$ : $\\\\pi^{(n)} = [\\\\pi^{(n)}_j]_{j \\\\in E} = [\\\\pi^{(n)}_1, \\\\pi^{(n)}_2, \\\\pi^{(n)}_3, ..., \\\\pi^{(n)}_j]$.\\n","- Les valeurs de transition d\xe9pendent de la matrice de transition $P$ :\\n","$$\\\\pi^{(n)}_j = P[X_n = j] = \\\\sum_{i \\\\in E} P[X_{n - 1} = i] \\\\times P[X_n = j | X_{n - 1} = i] \\\\;\\\\; Loi \\\\;\\\\; de \\\\;\\\\; Bayes$$\\n","$$\\\\pi^{(n)}_j = \\\\sum_{i \\\\in E} \\\\pi^{(n-1)}_j \\\\times P_{ij}$$  \\n","Par r\xe9cursion jusqu\'\xe0 $0$, on obtient :\\n","$$\\\\pi^{(n)}_j = \\\\pi^{(n-1)} \\\\times P = \\\\pi^{(0)}P^n$$  \\n","**Explication**  \\n","$P[X_n = j]$ est la probabilit\xe9 d\'\xeatre \xe0 l\'\xe9tat $n$ \xe0 l\'instant $j$ et est not\xe9 $\\\\pi{(n)}_j$. Pour obtenir cette probabilit\xe9 d\'\xeatre \xe0 l\'\xe9tat $n$, il faut sommer toutes les probabilit\xe9s de transition vers cette \xe9tat en d\xe9marrant de l\'\xe9tat pr\xe9c\xe9dent $i$ (Il faut consid\xe9rer tout les chemins possibles). Plus formellement cela donne $P[X_{n - 1} = i] \\\\times P[X_n = j | X_{n - 1} = i]$ pour un seul chemin, en sommant le tout on obtient $\\\\Longleftrightarrow \\\\sum_{i \\\\in E} P[X_{n - 1} = i] \\\\times P[X_n = j | X_{n - 1} = i]$.  \\n","Pour encore mieux comprendre, il faut savoir que $P[X_n = i]$ est simplement la probabilit\xe9 d\'\xeatre \xe0 l\'\xe9tat $i$ qu\'on note $\\\\pi$. quant \xe0 $P[X_n = i| X_{n - 1} = j]$, c\'est la probabilit\xe9 de **transiter** de l\'\xe9tat $j$ vers $i$ et qu\'on note $P$ (C\'est une matrice).  \\n","Quant \xe0 la r\xe9cursion jusu\'\xe0 $0$, voici un d\xe9roulement pour mieux comprendre :\\n","- $\\\\pi^{(1)} = \\\\pi^{(0)} \\\\times P$\\n","- $\\\\pi^{(2)} = \\\\pi^{(1)} \\\\times P = \\\\pi^{(0)} \\\\times P^2$\\n","- $\\\\pi^{(3)} = \\\\pi^{(2)} \\\\times P = \\\\pi^{(0)} \\\\times P^3$\\n","- ...\\n","- $\\\\pi^{(n)} = \\\\pi^{(0)} \\\\times P^n$ *Appell\xe9 formule de probabilit\xe9s totales*\\n","\\n","### **\xc9volution globale du processus $X_n$ ($m$ \xe9tapes) :**\\n","Soit $P_{ij}^{(m)}$ la probabilit\xe9 de transition de $i$ vers $j$ en $m$ \xe9tapes:\\n","$$ P_{ij}^{(m)} = P[X_{n+m} = j|X_n = i] = \\\\sum_{k \\\\in E} P_{ik}^{(m - 1)} \\\\times P_{kj}$$  \\n","Cette probabilit\xe9 est \xe9gale \xe0 $\\\\pi^{(m)}_j$ (L\'\xe9tat $j$ est \xe0 l\'\xe9tape $m$). il faut donc sommer toutes les probabilit\xe9s de transition vers cette \xe9tat en d\xe9marrant de l\'\xe9tat pr\xe9c\xe9dent $i$ (Il faut consid\xe9rer tout les chemins possibles). Plus formellement cela donne $P[X_{n + m - 1} = i] \\\\times P[X_{n + m} = j | X_{n + m - 1} = i]$ pour un seul chemin, en sommant le tout on obtient $\\\\Longleftrightarrow \\\\sum_{i \\\\in E} P[X_{n + m - 1} = i] \\\\times P[X_{n + m} = j | X_{n + m - 1} = i]$. Pour encore mieux comprendre, il faut savoir que $P[X_n = i]$ est simplement la probabilit\xe9 d\'\xeatre \xe0 l\'\xe9tat $i$ qu\'on note $\\\\pi$. Quant \xe0 $P[X_n = i| X_{n - 1} = j]$, c\'est la probabilit\xe9 de **transiter** de l\'\xe9tat $j$ vers $i$ et qu\'on note $P$ (C\'est une matrice).\\n","\\n","### **Temps de s\xe9jour :**\\n","Le temps de s\xe9joir en un \xe9tat $i$ en $n$ \xe9tapes est le temps pass\xe9 dans un \xe9tat de la cha\xeene de Markov. Suivant une distribution g\xe9om\xe9trique (de param\xe8tre $P_{jj}$ \\\\forall j \\\\in E), on peut d\xe9finir la formule suivante :\\n","$$ P[T=k] = p^k \\\\times (1-p)$$\\n","Avec $T$ est le temps de s\xe9jour compt\xe9 en nombre d\'\xe9tapes et $p$ la probabilit\xe9 de quitter l\'\xe9tat courant. Dans le cas d\'une CMTD avec plusieurs noeuds, on peut d\xe9finir $p$ comme \xe9tant la somme des probabilit\xe9s de transitions \xe0 partir de l\'\xe9tat courant (On transforme la cha\xeene en une cha\xeene de deux \xe9tats seulement, l\'\xe9tat courant et le reste).  \\n","\\n","La formule peut \xeatre retrouv\xe9 par r\xe9cursion :\\n","- $P[T = 1] = 1 - p$  \\n","- $P[T = 2] = p \\\\times (1 - p)$  \\n","- $P[T = 3] = p^{2} \\\\times (1 - p)$  \\n","- $...$  \\n","- $P[T = k] = p^{k - 1} \\\\times (1 - p)$  \\n","\\n","### **Temps de s\xe9jour moyenne:**\\n","Le temps de s\xe9jour moyen d\'un \xe9tat $i$ est d\xe9fini par l\'esp\xe9rance de la loi g\xe9om\xe9trique :\\n","$$\\\\mathbb{E}[T] = \\\\frac{1}{p}$$\\n","\\n","### **CMTD irr\xe9ductible :**\\n","Une CMTD est dites irr\xe9ductible si et seulement si on peut atteindre n\'importe quel \xe9tat $j$ \xe0 partir de $i$ avec $i \\\\neq j$ et en un nombre fini d\'\xe9tapes (c-\xe0-d qu\'il n\'y a pas de boucle dans la cha\xeene, sinon \xe7a peut engendrer une faible probabilit\xe9 de boucler infiniment).  \\n","$$\\\\forall i, j \\\\in E, \\\\exists m > 1 \\\\Longrightarrow P_{ij}^{(m)} \\\\neq 0$$  \\n","Une cha\xeenes **non** irr\xe9ductible poss\xe8de au moins une sous cha\xeene absorbante.  \\n","\\n","## **3. Classification des \xe9tats d\'une cha\xeene de Markov:**\\n","### 1. \xc9tat p\xe9riodique :\\n","On peut d\xe9finir un \xe9tat $i$ comme p\xe9riodique si et seulement si on peut revenir apr\xe8s un nombre d\'\xe9tapes multiple de $k > 1$ (c-\xe0-d qu\'il y a une boucle dans la cha\xeene):\\n","$$\\\\exists k> 1 \\\\;\\\\;tel \\\\;\\\\; que \\\\;\\\\; P_{ij}^{(m)} = 0 \\\\;\\\\; pour \\\\;\\\\; tout \\\\;\\\\; m \\\\in \\\\mathbb{N} \\\\;\\\\; et \\\\;\\\\; m \\\\% k \\\\neq 0$$\\n","On dit alors que la p\xe9riode de l\'\xe9tat $i$ est le plus grand entier $k$ v\xe9rifiant la propri\xe9t\xe9. La p\xe9riode d\'une CMTD est le PGCD des p\xe9riodes de tout ses \xe9tats. Si la p\xe9riode est \xe9gale \xe0 $1$, alors la CMTD est dite **ap\xe9riodique**.  \\n","### 2. \xc9tat transitoire et r\xe9current :\\n","Avant tout il faut d\xe9finir la probabilit\xe9 $f_{jj}$ de transition de l\'\xe9tat $j$ vers l\'\xe9tat $j$ (c-\xe0-d $P_{jj}^{(m)} = 1$). \\n","- On peut d\xe9finir un \xe9tat $i$ comme transitoire si et seulement si $f_{ij}$ est sup\xe9rieur \xe0 $f_{ji}$ (c-\xe0-d $P_{ij}^{(m)} > P_{ji}^{(m)}$, il est plus probable d\'y sortir que d\'y entrer. Il est donc transitoire). \\n","- On peut d\xe9finir un \xe9tat $i$ comme r\xe9current si et seulement si $f_{ij}$ est inf\xe9rieur \xe0 $f_{ji}$ (c-\xe0-d $P_{ij}^{(m)} < P_{ji}^{(m)}$, de la m\xeame mani\xe8re, il est plus probable d\'y entrer que d\'y sotir. Il est donc r\xe9current).  \\n","\\n","Pour faire beaucoup plus simple, on d\xe9finit les formule suivante :\\n","$$f_{ij} = P_{ij}^{(m)} = \\\\sum_{m \\\\in \\\\mathbb{N}}^\\\\infty P_{ij}^{(m)}$$  \\n","Un \xe9tat est :\\n","- **Transitoire** si et seulement si $f_{jj} < 1$\\n","- **R\xe9current** si et seulement si $f_{jj} = 1$. De plus :\\n","    - Il est **r\xe9current nul** si le temps moyen de retour est infini. Not\xe9 $M_j = \\\\infty$ (M_j est le temps moyen de retour vers $j$).\\n","    - Il est **r\xe9current non nul** si le temps moyen de retour est fini. Not\xe9 $M_j = \\\\sum_{n=1}^{\\\\infty} nf_{jj}^{(n)}$ (Revoir la formule de l\'esp\xe9rence d\'une variable discr\xe8te pour comprendre l\'origine de la formule)."]},{"cell_type":"markdown","metadata":{},"source":["## **3. Ergodicit\xe9 d\'une cha\xeene de Markov:**\\n","Une cha\xeene de Markov est dite **ergodique** si et seulement si elle est irr\xe9ductible et que tous ses \xe9tats sont transitoires (tout les \xe9tats sont atteignables). Plus formellement, la cha\xeene est \xe9rgodique si $\\\\lim_{t \\\\rightarrow \\\\infty} \\\\pi^{(t)}$ existe est ne d\xe9pend pas du vecteur initial $\\\\pi^{(0)}$. En plus, une cha\xeene est :\\n","- Irr\xe9ductible si tout ses \xe9tats sont de la m\xeame nature.\\n","- Irr\xe9ductible finie si tout ses \xe9tats sont r\xe9currents non nuls.\\n","\\n","### Le nombre moyen de passage par un \xe9tat\\n","Soit $R_{ij}$ le nombre moyen de passages par un \xe9tat $j$ sachant que l\'on vient d\'un \xe9tat $i \\\\neq j$ :\\n","$$R_{ij} = \\\\sum_{n=1}^{\\\\infty} n \\\\times P[Y=n_{passages} |X_{t-1}=i]$$\\n","Avec $Y$ le nombre de passages $n$ par un \xe9tat $j$ et $X_{t-1}$ l\'\xe9tat pr\xe9c\xe9dent. On note aussi :\\n","$$R_{ij} = \\\\frac{f_{ij}}{1 - f_{jj}}$$\\n","c-\xe0-dire que $R_{ij}$ est \xe9gal \xe0 la probabilit\xe9 de transition d\'un \xe9tat $i$ vers l\'\xe9tat $j$ (un passage de $j$) divis\xe9 par la probabilit\xe9 de transition de tout les autres \xe9tats sauf vers lui m\xeame (tout les chemins possibles sauf les boucles internes de $j$ vers $j$ car ce ne sont pas r\xe9ellement des passages mais plutot une station sur le m\xeame \xe9tat).\\n","\\n","## **4. R\xe9gime permanent:**\\n","Il s\'agit de l\'\xe9tude d\'un \xe9tat stationnaire de $\\\\pi$ si ce d\xe9rnier existe. On peut d\xe9finir un r\xe9gime permanent comme un \xe9tat stationnaire de $\\\\pi$ si et seulement si :\\n","$$\\\\lim_{t \\\\rightarrow \\\\infty} \\\\pi^{(t)} = \\\\pi^{(0)}P^n \\\\Longrightarrow \\\\pi^{(n)} = \\\\pi^{(n+1)}$$\\n","il faut donc r\xe9soudre le syst\xe8me d\'equations suivant :\\n","$$\\\\pi = \\\\pi P$$\\n","\\n","Cependant, il existe des condtions n\xe9c\xe9ssaires mais pas suffisantes pour qu\'un r\xe9gime permanent soit vrai. La cha\xeene de Markov doit \xeatre irr\xe9ductible (donc ap\xe9riodique), et les \xe9tats doivent \xeatre transitoires (\xe9rgodique). On aura alors $\\\\lim_{n \\\\rightarrow \\\\infty} \\\\pi^{(n)} = \\\\pi^{(p)}$ existe et ne d\xe9pend pas du vecteur initial $\\\\pi^{(0)}$. \\n","$$ \\\\pi_j = \\\\sum_{i \\\\in E} \\\\pi_{i} P_{ij} = \\\\sum_{j} P_{ji} = \\\\pi P$$\\n","Car les flux sortants sont \xe9gaux aux flux entrants, et de ce fait $\\\\sum_{i \\\\in E} P_{ij} = 1$.  \\n","**Rappel** la formule suivante est tr\xe8s utile pour r\xe9soudre les syst\xe8mes d\'\xe9quations :\\n","$$\\\\sum_{i \\\\in E} \\\\pi_i = 1$$  \\n","\\n","Si la probabilit\xe9 stationnaire existe, alors il existe un r\xe9gime permanent et on note :\\n","$$\\\\pi_i = \\\\frac{1}{M_i}$$"]}],"metadata":{"interpreter":{"hash":"101b61497117ea3f18d4e0f8cf93eb2d64c16663f47aa00fa1289b89b66d7e41"},"kernelspec":{"display_name":"Python 3.6.12 64-bit (\'deeplearning\': conda)","name":"python3"},"language_info":{"codemirror_mode":{"name":"ipython","version":3},"file_extension":".py","mimetype":"text/x-python","name":"python","nbconvert_exporter":"python","pygments_lexer":"ipython3","version":"3.6.12"},"orig_nbformat":4},"nbformat":4,"nbformat_minor":2}}]')}}]);