document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-area-jump-go]').forEach(button => {
    button.addEventListener('click', () => {
      const container = button.closest('.hero-area-jump, .area-jump-inner') || button.parentElement;
      const select = container?.querySelector('[data-area-jump]');
      if (select?.value) {
        window.location.href = select.value;
      } else {
        select?.focus();
      }
    });
  });

  const areaData = {
    '1a': {
      title: 'Area 1A · English Composition',
      section: 'Cal-GETC §9.1.1',
      page: 'areas/1a.html',
      intro: 'Academic writing is the main focus. The COR should make recursive writing, rhetorical awareness, substantial reading, feedback supporting revision, and the writing quantity visible.',
      checks: [
        'The course includes a writing handbook or evidence of similar writing pedagogy and substantial reading.',
        'The COR shows strategies for generating, drafting, and revising in multiple genres for multiple communities or audiences.',
        'Major writing assignments receive formative peer and instructor feedback to support revision.',
        'The course explicitly addresses audience, purpose, context, genre, language conventions, and varied sources as evidence.',
        'Representative academic genres are visible, and main writing assignments are not creative-writing genres.',
        'The course requires at least 5,000 words of scaffolded writing appropriate for academic contexts across major assignments.'
      ]
    },
    '1b': {
      title: 'Area 1B · Critical Thinking & Composition', section: 'Cal-GETC §9.1.2', page: 'areas/1b.html',
      intro: 'The course builds on Area 1A and makes critical reasoning, inquiry-driven research, argumentative writing, source evaluation, and the 5,000-word writing requirement visible.',
      checks: [
        'The COR explicitly includes analysis, criticism, and generation of complex ideas.',
        'Inductive and deductive reasoning, assumptions, and logical errors or fallacies are visible.',
        'Students critically respond to texts with attention to audience, purpose, and social context.',
        'Students evaluate sources for relevance, reliability, and rhetorical appropriateness.',
        'Analysis and construction of arguments are major components of research and written work.',
        'The course requires at least 5,000 words of writing; the COR reflects the intended writing process.',
        'Students revise and receive instructor feedback on at least one extended argument.',
        'Significant reading, writing pedagogy, culturally aware text selection, and reflection on learning/writing processes are visible.'
      ]
    },
    '1c': {
      title: 'Area 1C · Oral Communication', section: 'Cal-GETC §9.1.3', page: 'areas/1c.html',
      intro: 'The course is public-speaking centered and should make rhetorical theory, research, argument, ethical practice, live speeches, delivery, listening, and analysis of public discourse visible.',
      checks: [
        'Rhetorical foundations, including canons of rhetoric and ethos, pathos, and logos, are visible.',
        'Students find, evaluate, and use primary and secondary supporting materials for credibility, accuracy, and relevance.',
        'Students develop arguments around a guiding thesis and adapt organization to audience, occasion, and context.',
        'Ethical communication practices are explicit.',
        'Rhetorical sensitivity to diversity, equity, inclusion, belonging, and accessibility is visible.',
        'Students complete a variety of well-prepared, faculty-supervised and faculty-evaluated speeches delivered to a live audience.',
        'Delivery, communication apprehension, critical listening, constructive peer criticism, and analysis of public discourse are addressed.'
      ]
    },
    '2': {
      title: 'Area 2 · Mathematical Concepts & Quantitative Reasoning', section: 'Cal-GETC §9.2', page: 'areas/2.html',
      intro: 'Mathematics and quantitative reasoning must be the primary purpose and content, with students developing, presenting, using, and critiquing quantitative arguments.',
      checks: [
        'The course is transfer-level mathematics, statistics, or another quantitative discipline.',
        'Mathematics and quantitative reasoning are the primary purpose and content.',
        'Students develop, present, use, and critique quantitative arguments.',
        'If statistics, the mathematical basis includes probability theory, estimation, applications, and interpretation.',
        'The reasoning reaches beyond high-school preparation and is appropriate to transfer-level coursework.'
      ]
    },
    '3a': {
      title: 'Area 3A · Arts', section: 'Cal-GETC §9.3.1–9.3.2', page: 'areas/3a.html',
      intro: 'The major emphasis should integrate history, theory, aesthetics, and criticism rather than primarily technique, skills, or performance.',
      checks: [
        'The course substantially integrates history, theory, aesthetics, and criticism.',
        'Students analyze and appreciate works of cultural and aesthetic importance.',
        'The course has a liberal-arts orientation rather than primarily skills training or performance.'
      ]
    },
    '3b': {
      title: 'Area 3B · Humanities', section: 'Cal-GETC §9.3.3–9.3.4', page: 'areas/3b.html',
      intro: 'The course should center humanities analysis and appreciation rather than primarily skills acquisition or performance.',
      checks: [
        'Students substantially analyze and appreciate humanities works, ideas, traditions, or cultural expressions.',
        'Historical, literary, philosophical, religious, aesthetic, or cultural substance appropriate to the discipline is visible.',
        'The course has a liberal-arts / humanities focus rather than primarily skills acquisition or performance.'
      ]
    },
    '4': {
      title: 'Area 4 · Social & Behavioral Sciences', section: 'Cal-GETC §9.4', page: 'areas/4.html',
      intro: 'The course should make social/behavioral science perspectives and research methods visible and maintain a theoretical disciplinary focus rather than a practical or applied one.',
      checks: [
        'Perspectives and research methods of the social and behavioral sciences are visible.',
        'Problems and issues are examined in contemporary, historical, and geographical settings.',
        'The course includes contributions and perspectives of diverse groups and societies.',
        'The content emphasizes theory, core concepts, and disciplinary methods rather than personal, practical, or applied content.'
      ]
    },
    '5a': {
      title: 'Area 5A · Physical Science', section: 'Cal-GETC §9.5', page: 'areas/5a.html',
      intro: 'The course should emphasize core physical-science concepts, experimental methodology, hypothesis testing, evidence-based reasoning, and theoretical principles.',
      checks: [
        'Core concepts of a physical science discipline are central.',
        'Experimental methodology, hypothesis testing, investigation, and systematic questioning are visible.',
        'Evidence-based reasoning and fundamental theoretical principles are emphasized rather than primarily recall of facts.',
        'The course is designed at a baccalaureate-level general-education level.'
      ]
    },
    '5b': {
      title: 'Area 5B · Biological Science', section: 'Cal-GETC §9.5', page: 'areas/5b.html',
      intro: 'The course should emphasize core biological-science concepts, experimental methodology, hypothesis testing, evidence-based reasoning, and theoretical principles.',
      checks: [
        'Core concepts of a biological science discipline are central.',
        'Experimental methodology, hypothesis testing, investigation, and systematic questioning are visible.',
        'Evidence-based reasoning and fundamental theoretical principles are emphasized rather than primarily recall of facts.',
        'The course is designed at a baccalaureate-level general-education level.'
      ]
    },
    '5c': {
      title: 'Area 5C · Laboratory', section: 'Cal-GETC §9.5.2–9.5.3', page: 'areas/5c.html',
      intro: 'The laboratory must be connected to Area 5A or 5B content and make experimental work, appropriate manipulations, safe instrument use, unit rules, and the laboratory manual visible.',
      checks: [
        'The laboratory relies on hands-on or validated simulation-based manipulation of matter, equipment, and instrumentation.',
        'Safe use of equipment and instruments relevant to the subject is included.',
        'Experimental methodology and hypothesis testing connect to principles taught in the related lecture course.',
        'A standalone laboratory course carries at least one semester/quarter unit and has the corresponding lecture as prerequisite or corequisite, when applicable.',
        'A clearly identified laboratory manual appears in the COR.'
      ]
    },
    '6': {
      title: 'Area 6 · Ethnic Studies', section: 'Cal-GETC §9.6', page: 'areas/6.html',
      intro: 'The course must meet the Ethnic Studies prefix/cross-listing rule and at least three of the five applicable CSU or UC Ethnic Studies core competencies.',
      checks: [
        'The course has an appropriate Ethnic Studies prefix or is cross-listed with an Ethnic Studies-prefixed course.',
        'The COR clearly addresses at least three of the five applicable CSU or UC Ethnic Studies core competencies.',
        'The course substantively engages race, racism, racialization, ethnicity, power, and related concepts in one or more named populations/fields.',
        'Theory and knowledge produced by Native American, African American, Asian American, and/or Latina/o/x American communities are central.',
        'Critical analysis of intersections, histories, struggles, resistance, justice, solidarity, liberation, and anti-racist / anti-colonial thought or movements is visible.'
      ]
    }
  };

  const checklist = document.querySelector('[data-cor-checklist]');
  if (!checklist) return;

  const checkerArea = checklist.querySelector('[data-checker-area]');
  const panel = checklist.querySelector('[data-area-panel]');
  const areaGroup = checklist.querySelector('[data-area-checks]');
  const areaItems = checklist.querySelector('[data-area-check-items]');
  const areaHeading = checklist.querySelector('[data-area-check-heading]');
  const areaGuideLink = checklist.querySelector('[data-area-guide-link]');
  const areaGuideLinkBottom = checklist.querySelector('[data-area-guide-link-bottom]');
  const workspace = checklist.querySelector('[data-checker-workspace]');
  const nextPanel = checklist.querySelector('[data-checker-next]');
  const fill = checklist.querySelector('[data-progress-fill]');
  const text = checklist.querySelector('[data-progress-text]');
  const reset = checklist.querySelector('[data-reset-checklist]');
  const printButton = checklist.querySelector('[data-print-checklist]');
  const checkSections = () => [...checklist.querySelectorAll('[data-check-section]')];

  const getScoredBoxes = () =>
    [...checklist.querySelectorAll('input[type="checkbox"]:not([data-optional-check])')];

  const getAllBoxes = () => [...checklist.querySelectorAll('input[type="checkbox"]')];

  const update = () => {
    const boxes = getScoredBoxes();
    const checked = boxes.filter(b => b.checked).length;
    const pct = boxes.length ? Math.round((checked / boxes.length) * 100) : 0;
    if (fill) fill.style.width = pct + '%';
    if (text) text.textContent = `${checked} of ${boxes.length} core review points checked`;
  };

  const bindBoxes = () => getAllBoxes().forEach(b => {
    if (!b.dataset.bound) {
      b.addEventListener('change', update);
      b.dataset.bound = 'true';
    }
  });

  const setWorkspaceVisible = (visible) => {
    if (workspace) workspace.hidden = !visible;
    if (nextPanel) nextPanel.hidden = !visible;
    checkSections().forEach(section => {
      // Area-specific group remains controlled below after content is rendered.
      if (!section.hasAttribute('data-area-checks')) section.hidden = !visible;
    });
  };

  const renderArea = (key, updateUrl = true) => {
    const data = areaData[key];
    if (areaItems) areaItems.replaceChildren();

    if (!data) {
      if (areaGroup) areaGroup.hidden = true;
      if (panel) {
        panel.hidden = true;
        panel.replaceChildren();
      }
      setWorkspaceVisible(false);
      if (updateUrl) history.replaceState(null, '', location.pathname);
      update();
      return;
    }

    if (panel) {
      panel.hidden = false;
      panel.replaceChildren();

      const wrapper = document.createElement('div');
      const pill = document.createElement('span');
      pill.className = 'source-pill standard';
      pill.textContent = data.section;

      const heading = document.createElement('h2');
      heading.textContent = data.title;

      const intro = document.createElement('p');
      intro.textContent = data.intro;

      const guide = document.createElement('a');
      guide.href = data.page;
      guide.textContent = 'Read the full area guide →';

      wrapper.append(pill, heading, intro, guide);
      panel.append(wrapper);
    }

    if (areaHeading) areaHeading.textContent = `3. ${data.title} requirements`;
    if (areaGuideLink) areaGuideLink.href = data.page;
    if (areaGuideLinkBottom) areaGuideLinkBottom.href = data.page;

    data.checks.forEach((checkText, i) => {
      const id = `area-check-${key}-${i + 1}`;
      const item = document.createElement('div');
      item.className = 'check-item';

      const input = document.createElement('input');
      input.id = id;
      input.type = 'checkbox';

      const label = document.createElement('label');
      label.htmlFor = id;

      const strong = document.createElement('strong');
      strong.textContent = checkText;

      const small = document.createElement('small');
      small.textContent = data.section;

      label.append(strong, small);
      item.append(input, label);
      areaItems?.append(item);
    });

    setWorkspaceVisible(true);
    if (areaGroup) areaGroup.hidden = false;
    bindBoxes();
    update();

    if (updateUrl) {
      history.replaceState(null, '', `${location.pathname}#area=${encodeURIComponent(key)}`);
    }
  };

  checkerArea?.addEventListener('change', () => renderArea(checkerArea.value));

  reset?.addEventListener('click', () => {
    getAllBoxes().forEach(b => b.checked = false);
    update();
    const firstVisible = getAllBoxes().find(b => !b.closest('[hidden]'));
    firstVisible?.focus();
  });

  printButton?.addEventListener('click', () => window.print());

  bindBoxes();
  const hashMatch = location.hash.match(/^#area=([a-z0-9]+)$/i);
  const initialArea = hashMatch ? hashMatch[1].toLowerCase() : null;
  if (initialArea && areaData[initialArea]) {
    checkerArea.value = initialArea;
    renderArea(initialArea, false);
  } else {
    setWorkspaceVisible(false);
    update();
  }
});
