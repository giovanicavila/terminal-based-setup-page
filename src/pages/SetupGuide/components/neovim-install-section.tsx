import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useTranslate } from "@/contexts/translate-context";
import { CodeBlock } from "./code-block";

export function NeovimInstallSection() {
  const { t } = useTranslate();

  return (
    <div>
      <h4 className="mb-2 font-medium">1. {t.install.neovimInstall}</h4>
      <Tabs defaultValue="macos">
        <TabsList>
          <TabsTrigger value="macos">{t.common.macOS}</TabsTrigger>
          <TabsTrigger value="ubuntu">{t.common.ubuntu}</TabsTrigger>
        </TabsList>
        <TabsContent value="macos">
          <CodeBlock code="brew install neovim" language="bash" />
        </TabsContent>
        <TabsContent value="ubuntu">
          <CodeBlock
            code={
              "curl -LO https://github.com/neovim/neovim/releases/latest/download/nvim-linux-x86_64.appimage\nchmod +x nvim-linux-x86_64.appimage\nsudo mv nvim-linux-x86_64.appimage /usr/local/bin/nvim"
            }
            language="bash"
          />
        </TabsContent>
      </Tabs>
      <CodeBlock code="nvim --version" label="Verificar" language="bash" />

      <h4 className="mt-6 mb-2 font-medium">2. {t.install.lazyvimDeps}</h4>
      <Tabs defaultValue="macos">
        <TabsList>
          <TabsTrigger value="macos">{t.common.macOS}</TabsTrigger>
          <TabsTrigger value="ubuntu">{t.common.ubuntu}</TabsTrigger>
        </TabsList>
        <TabsContent value="macos">
          <CodeBlock
            code="brew install git ripgrep fd lazygit node npm"
            language="bash"
          />
        </TabsContent>
        <TabsContent value="ubuntu">
          <CodeBlock
            code={`sudo apt install git ripgrep fd-find nodejs npm -y\n\n# lazygit no Ubuntu:\nLAZYGIT_VERSION=$(curl -s "https://api.github.com/repos/jesseduffield/lazygit/releases/latest" | grep '"tag_name"' | sed -E 's/.*"v*([^"]+)".*/\\1/')\ncurl -Lo lazygit.tar.gz "https://github.com/jesseduffield/lazygit/releases/latest/download/lazygit_$LAZYGIT_VERSION"_Linux_x86_64.tar.gz\ntar xf lazygit.tar.gz lazygit\nsudo install lazygit /usr/local/bin`}
            language="bash"
          />
        </TabsContent>
      </Tabs>

      <h4 className="mt-6 mb-2 font-medium">3. {t.install.lazyvimInstall}</h4>
      <CodeBlock
        code={
          "# Backup da config atual (se existir)\n[ -d ~/.config/nvim ] && mv ~/.config/nvim ~/.config/nvim.bak\n[ -d ~/.local/share/nvim ] && mv ~/.local/share/nvim ~/.local/share/nvim.bak\n\n# Clona o starter\ngit clone https://github.com/LazyVim/starter ~/.config/nvim\nrm -rf ~/.config/nvim/.git\n\n# Abre o Neovim — na primeira vez instala tudo automaticamente\nnvim"
        }
        language="bash"
      />

      <h4 className="mt-6 mb-2 font-medium">4. {t.install.pythonExtras}</h4>
      <p className="mb-2 text-muted-foreground text-sm">
        Crie ~/.config/nvim/lua/plugins/extras.lua:
      </p>
      <CodeBlock
        code={t.config.lazyvimExtras}
        label="~/.config/nvim/lua/plugins/extras.lua"
        language="lua"
      />
    </div>
  );
}
