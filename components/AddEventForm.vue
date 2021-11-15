<template v-slot:activator="{ on, attrs }">
  <v-dialog
    v-model="this.dialog"
    scrollable
    max-width="60%"
    @click:outside="dailogStateChange"
  >
    <v-card>
      <v-card-title>
        <span class="text-h5">イベント追加</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-text-field
                v-model="setNewEvent.eventName"
                :counter="24"
                label="イベント名"
                required
                outlined
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                v-model="setNewEvent.firstName"
                :counter="8"
                label="セイ"
                required
                outlined
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="6">
              <v-text-field
                v-model="setNewEvent.lastName"
                :counter="8"
                label="メイ"
                required
                outlined
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="6">
              <v-text-field
                v-model="setNewEvent.email"
                label="メールアドレス"
                outlined
                placeholder="example@test.com"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                v-model="setNewEvent.phoneNumber"
                label="電話番号"
                required
                outlined
                placeholder="XXXYYYYZZZ"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-menu
                ref="menu"
                :close-on-content-click="false"
                transition="scale-transition"
                offset-y
                min-width="auto"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="setNewEvent.date"
                    label="日付"
                    prepend-icon="mdi-calendar"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker
                  v-model="setNewEvent.date"
                  :max="
                    new Date(
                      Date.now() - new Date().getTimezoneOffset() * 60000
                    )
                      .toISOString()
                      .substr(0, 10)
                  "
                  min="1999-01-01"
                ></v-date-picker>
              </v-menu>
            </v-col>
            <v-col cols="12">
              <v-textarea
                color="teal"
                :counter="254"
                outlined
                v-model="setNewEvent.note"
              >
                <template v-slot:label>
                  <div>備考</div>
                </template>
              </v-textarea>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click.stop="dailogStateChange">
          閉じる
        </v-btn>
        <v-btn color="blue darken-1" text @click.stop="sendStore"> 追加 </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    dialog: {
      type: Boolean,
    },
    newEvent: {
      type: Object,
    },
  },
  methods: {
    dailogStateChange() {
      this.$emit("dailogStateChange");
    },
    sendStore() {
      this.$emit("sendStore");
    },
  },
  computed: {
    setNewEvent: {
      get() {
        return this.newEvent;
      },
      set(newVal) {
        return this.$emit("update:newEvent", newVal);
      },
    },
  },
};
</script>

<style>
</style>